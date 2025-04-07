const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var cors = require("cors");

const app = express();
app.use(bodyParser.json());

var corsOptions = {
  origin: "http://localhost:5173", // Replace with your React app's URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOptions));
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/usersDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  phoneNumber: String,
});
const User = mongoose.model("User", UserSchema);

// Create (POST)
app.post("/users", async (req, res) => {
  try {
    const newItem = new User(req.body);
    await newItem.save();
    res.status(201).send(newItem);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Read (GET all)
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

// Read (GET by ID)
app.get("/user/:id", async (req, res) => {
  try {
    const users = await User.findById(req.params.id);
    if (!users) return res.status(404).send("User not found");
    res.send(users);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Update (PUT)
app.put("/user/:id", async (req, res) => {
  try {
    const users = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!users) return res.status(404).send("Item not found");
    res.send(users);
  } catch (err) {
    res.status(400).send(err);
  }
  console.log(req.body);
});

// Delete (DELETE)
app.delete("/user/:id", async (req, res) => {
  try {
    const itemId = req.params.id; // Get ID from URL
    // console.log(itemId);

    const item = await User.findByIdAndDelete(itemId); // Use `User` model

    if (!item) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully", item });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Login (POST)
app.post("/login", async (req, res) => {
  // console.log("----------", req);
  try {
    const { email, password } = req.body;
    console.log("def", email, password);
    const user = await User.findOne({ email });
    console.log("user", user);

    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    res.status(200).json({ message: "Login successful", user });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
});

// Start Server
app.listen(3000, () => console.log("Server running on port 3000"));
