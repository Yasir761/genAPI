import express from "express";
import { createUser, getUsers, updateUser, deleteUser } from "../controllers/usersController.js";
import validateRequest from "../middlewares/validateRequest.js";

const usersRouter = express.Router();

usersRouter.post("/", validateRequest, createUser);
usersRouter.get("/", getUsers);
usersRouter.put("/:id", validateRequest, updateUser);
usersRouter.delete("/:id", deleteUser);

export { usersRouter };
