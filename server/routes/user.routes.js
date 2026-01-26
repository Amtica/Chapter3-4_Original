import express from "express";
import User from "../models/user.model.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

/* Create user */
router.post("/", async (req, res, next) => {
  try {
    const user = new User(req.body);
    const savedUser = await user.save();

    res.status(201).json(savedUser);
  } catch (err) {
    next(err);
  }
});

/* List users */
router.get("/", async (req, res, next) => {
  try {
    const users = await User.find();

    res.json(users);
  } catch (err) {
    next(err);
  }
});

/* Get user by ID */
router.get("/:id", async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (err) {
    next(err);
  }
});

/* Delete user */
router.delete("/:id", async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);

    res.json({ message: "User deleted" });
  } catch (err) {
    next(err);
  }
});

export default router;
