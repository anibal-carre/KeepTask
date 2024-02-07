import express from "express";
import {
  createTask,
  getTasks,
  findTask,
  editTask,
  deleteTask,
} from "../controllers/task.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.post("/create", verifyToken, createTask);
router.put("/edit/:_id", verifyToken, editTask);
router.get("/:user_id", verifyToken, getTasks);
router.get("/task/:_id", verifyToken, findTask);
router.delete("/delete/:_id", verifyToken, deleteTask);

export default router;
