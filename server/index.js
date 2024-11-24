require("dotenv").config();
const express = require("express");
const cors = require("cors");
const http = require("http");
const socketio = require("socket.io");

const database = require("./config/db");
const socketHandler = require("./controllers/Chat/socket");
const Routes = require("./routes");

const app = express();

// Connect to the database
database.connect();

// Middleware
app.use(cors()); // Enable CORS for cross-origin requests
app.use(express.json()); // Parse JSON request bodies

// Setup additional middlewares (if any)
const { setupMiddlewares } = require("./middlewares/index");
setupMiddlewares(app);

const { cloudinaryConnect } = require("./config/Cloudinary");
cloudinaryConnect(); // Initialize Cloudinary configuration

// Create HTTP server
const server = http.createServer(app);

// Initialize Socket.IO on the server
const io = socketio(server, {
  cors: {
    origin: "*", // Adjust CORS policy for production
    methods: ["GET", "POST"],
  },
});

// Pass the io object to the socket handler module
socketHandler(io); // Manage customer care chats via this handler

// Routes
app.use("/api", Routes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error("Server Error:", err);
  res.status(500).json({ error: "Internal Server Error" });
});

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
