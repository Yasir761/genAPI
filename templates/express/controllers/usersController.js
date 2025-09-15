import { User } from "../models/userModel.js";
import ApiError from "../utils/ApiError.js";

// Create User
export const createUser = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    next(new ApiError(400, err.message));
  }
};

// Get Users
export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    next(new ApiError(500, "Failed to fetch users"));
  }
};

// Update User
export const updateUser = async (req, res, next) => {
  try {
    const updated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return next(new ApiError(404, "User not found"));
    res.json(updated);
  } catch (err) {
    next(new ApiError(400, err.message));
  }
};

// Delete User
export const deleteUser = async (req, res, next) => {
  try {
    const deleted = await User.findByIdAndDelete(req.params.id);
    if (!deleted) return next(new ApiError(404, "User not found"));
    res.json({ message: "User deleted" });
  } catch (err) {
    next(new ApiError(500, err.message));
  }
};
