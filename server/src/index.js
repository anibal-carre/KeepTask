import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = 3000;
const mongoDB = process.env.MONGO_DB;

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());

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
