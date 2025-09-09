import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Example route
app.get("/", (req, res) => {
  res.send("🚀 Hello from Express API!");
});

// Users route
import {usersRouter} from "./routes/users.js";
app.use("/users", usersRouter);

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
