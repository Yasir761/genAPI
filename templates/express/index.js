import express from "express";
import dotenv from "dotenv";
import  {connectDB}  from "./config/db.js";
import { usersRouter } from "./routes/users.js";
import errorHandler from "./middlewares/errorHandler.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Connect DB
connectDB();

// Routes
app.get("/", (req, res) => res.send("🚀 REST API running!"));
app.use("/users", usersRouter);

// Error Handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
