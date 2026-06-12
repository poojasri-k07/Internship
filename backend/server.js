const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// ENV CHECK (optional for debugging)
console.log("ENV CHECK:", process.env.MONGO_URI);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch(err => console.log("MongoDB Error:", err));

// ---------------- ROUTES ----------------

// Auth Routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

// Task Routes
const taskRoutes = require("./routes/taskRoutes");
app.use("/api/tasks", taskRoutes);

// Home Route
app.get("/", (req, res) => {
  res.send("Task Manager Backend Running Successfully!");
});

// ---------------- START SERVER ----------------
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})