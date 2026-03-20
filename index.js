// JavaScript source code
const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(express.json());

const users = {};

// Email validation
const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// Input validation
const validateUser = ({ name, email, age }) => {
  if (!name || typeof name !== "string") {
    return "Name is required";
  }
  if (!email || !isValidEmail(email)) {
    return "Invalid email";
  }
  if (typeof age !== "number" || age < 0) {
    return "Age must be a positive number";
  }
  return null;
};

// CREATE
app.post("/users", (req, res) => {
  const error = validateUser(req.body);
  if (error) return res.status(400).json({ error });

  const id = uuidv4();
  const user = { id, ...req.body };

  users[id] = user;
  res.status(201).json(user);
});

// READ ALL
app.get("/users", (req, res) => {
  res.json(Object.values(users));
});

// READ ONE
app.get("/users/:id", (req, res) => {
  const user = users[req.params.id];
  if (!user) return res.status(404).json({ error: "User not found" });

  res.json(user);
});

// UPDATE
app.put("/users/:id", (req, res) => {
  if (!users[req.params.id]) {
    return res.status(404).json({ error: "User not found" });
  }

  const error = validateUser(req.body);
  if (error) return res.status(400).json({ error });

  users[req.params.id] = { id: req.params.id, ...req.body };
  res.json(users[req.params.id]);
});

// DELETE
app.delete("/users/:id", (req, res) => {
  if (!users[req.params.id]) {
    return res.status(404).json({ error: "User not found" });
  }

  delete users[req.params.id];
  res.status(204).send();
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});