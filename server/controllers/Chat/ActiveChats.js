const activeChats = []; // This should track the active chat rooms.

io.on("connection", (socket) => {
  console.log("New connection", socket.id);

  // Listen for join event and add user to a room
  socket.on("join", ({ name, room, role }) => {
    // If the role is customer, the room should be added to activeChats
    if (role === "customer" && !activeChats.includes(room)) {
      activeChats.push(room);
    }

    // Make the user join the specified room
    socket.join(room);
    console.log(`${name} joined room ${room}`);

    // Emit updated active chats to all customer care agents
    io.emit("activeChats", { activeChats });
  });

  // Respond to request for active chats
  socket.on("requestActiveChats", () => {
    console.log("Active chats requested");
    socket.emit("activeChats", { activeChats });
  });

  // Handle disconnect (optional: you may want to remove chats if all users leave)
  socket.on("disconnect", () => {
    console.log("User disconnected", socket.id);
    // Handle removal of room from activeChats if needed
  });
});
