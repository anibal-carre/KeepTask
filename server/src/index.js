import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import User from "./models/User.js";
import { verifyToken } from "./middleware/auth.js";
import taskRoutes from "./routes/task.js";

dotenv.config();
const app = express();
const port = 3000;
const mongoDB = process.env.MONGO_DB;

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());
app.use("/auth", authRoutes);
app.use("/tasks", taskRoutes);

app.get("/users", verifyToken, async (req, res) => {
  const users = await User.find();

  res.send(users);
});

app.listen(port, () => {
  mongoose
    .connect(mongoDB)
    .then(() => {
      console.log("DB connection established");
      console.log(`Server running on port ${port}`);
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB:", err.message);
    });
});
