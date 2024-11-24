const { addUser, removeUser, getUser, getUsersInRoom } = require("./users");

const activeChats = new Map(); // Store active chats

const socketHandler = (io) => {
  io.on("connect", (socket) => {
    console.log("Socket connected:", socket.id);

    // When a user joins a chat room
    socket.on("join", ({ name, room, role }, callback) => {
      const { error, user } = addUser({ id: socket.id, name, room });

      if (error) return callback(error);

      socket.join(user.room);

      // If user role is 'user', create a new chat and notify customer care
      console.log("ROLE", role);

      if (role === "User") {
        activeChats.set(user.room, user.name); // Store active chats
        console.log(
          "Active Chats Updated (User Joined):",
          Array.from(activeChats.keys())
        ); // Debugging log
        io.emit("activeChats", { activeChats: Array.from(activeChats.keys()) }); // Send active chat list to all customer care agents
      }

      // Welcome message to the user who joined
      socket.emit("message", {
        user: "admin",
        text: `Welcome ${user.name}, to room ${user.room}`,
      });

      // Broadcast message to others in the room
      socket.broadcast
        .to(user.room)
        .emit("message", { user: "admin", text: `${user.name} has joined!` });

      io.to(user.room).emit("roomData", {
        room: user.room,
        users: getUsersInRoom(user.room),
      });
      callback();
    });

    // Handle customer care joining a chat
    socket.on("joinChat", ({ room, name }) => {
      socket.join(room);
      console.log(`Customer care ${name} joined room ${room}`);
      io.to(room).emit("message", {
        user: "admin",
        text: `Customer care ${name} has joined the chat!`,
      });
    });

    // Handle customer care requesting active chats
    socket.on("requestActiveChats", () => {
      console.log("Active Chats Requested:", Array.from(activeChats.keys())); // Debugging log
      socket.emit("activeChats", {
        activeChats: Array.from(activeChats.keys()),
      });
    });

    // User sends a message
    socket.on("sendMessage", (message, callback) => {
      const user = getUser(socket.id);
      if (user) {
        io.to(user.room).emit("message", { user: user.name, text: message });
        callback();
      }
    });

    // Handle user disconnect
    socket.on("disconnect", () => {
      const user = removeUser(socket.id);
      if (user) {
        io.to(user.room).emit("message", {
          user: "Admin",
          text: `${user.name} has left.`,
        });
        io.to(user.room).emit("roomData", {
          room: user.room,
          users: getUsersInRoom(user.room),
        });

        // Remove the chat from active chats if the user was the creator
        if (activeChats.has(user.room)) {
          activeChats.delete(user.room);
          console.log(
            "Active Chats Updated (User Disconnected):",
            Array.from(activeChats.keys())
          ); // Debugging log
          io.emit("activeChats", {
            activeChats: Array.from(activeChats.keys()),
          });
        }
      }
    });
  });
};

module.exports = socketHandler;
