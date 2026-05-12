require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// Import your User model
const User = require("./models/User");

// Test route
app.get("/test", (req, res) => {
  res.send("Server is working!");
});

// Step 1: POST route to add a user
app.post("/add-user", async (req, res) => {
  try {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email
    });
    await newUser.save();
    res.send("✅ User added successfully!");
  } catch (err) {
    res.status(400).send("❌ Error adding user: " + err.message);
  }
});

// Start server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// GET route to fetch all users
app.get("/users", async (req, res) => {
  try {
    const users = await User.find(); // fetch all documents from users collection
    res.json(users);
  } catch (err) {
    res.status(500).send("❌ Error fetching users: " + err.message);
  }
});
