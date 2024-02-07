import express from "express";
import {
  createTask,
  getTasks,
  findTask,
  editTask,
  deleteTask,
} from "../controllers/task.js";

const router = express.Router();

router.post("/create", createTask);
router.put("/edit/:_id", editTask);
router.get("/:user_id", getTasks);
router.get("/task/:_id", findTask);
router.delete("/delete/:_id", deleteTask);

export default router;
