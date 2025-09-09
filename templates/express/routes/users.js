import express from "express";

const usersRouter = express.Router();

// Create
usersRouter.post("/", (req, res) => {
  res.send("User created");
});

// Read
usersRouter.get("/", (req, res) => {
  res.send("List users");
});

// Update
usersRouter.put("/:id", (req, res) => {
  res.send("User updated");
});

// Delete
usersRouter.delete("/:id", (req, res) => {
  res.send("User deleted");
});

// ✅ Correct export
export { usersRouter };
