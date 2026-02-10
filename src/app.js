const express = require("express");
const app = express();

const userRoutes = require("./modules/user");
const meetingRoutes = require("./modules/meeting");

const errorHandler = require("./middlewares/errorHandler");

// Middleware
app.use(express.json());

// API Routes (Versioned)
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/meetings", meetingRoutes);

// Health Check
app.get("/", (req, res) => {
  res.json({ status: "API Running 🚀" });
});

// Global Error Handler
app.use(errorHandler);

module.exports = app;
