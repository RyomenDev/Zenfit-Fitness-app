const users = [];

// Add a new user to the list
const addUser = ({ id, name, room, role }) => {
  // Normalize input
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  // Check for existing user
  const existingUser = users.find(
    (user) => user.room === room && user.name === name
  );

  // Validation checks
  if (!name || !room) return { error: "Username and room are required." };
  if (existingUser) return { error: "Username is taken." };

  // Add user to the list with role
  const user = { id, name, room, role };
  users.push(user);

  return { user };
};

// Remove a user from the list by their ID
const removeUser = (id) => {
  // Find the index of the user
  const index = users.findIndex((user) => user.id === id);

  // If user is found, remove and return them
  if (index !== -1) return users.splice(index, 1)[0];
};

// Get a user by their ID
const getUser = (id) => users.find((user) => user.id === id);

// Get all users in a specific room
const getUsersInRoom = (room) => users.filter((user) => user.room === room);

// Get all active users with a specific role (e.g., customer care)
const getUsersByRole = (role) => users.filter((user) => user.role === role);

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
  getUsersByRole,
};
