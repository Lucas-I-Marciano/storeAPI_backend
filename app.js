import express from "express";
import pool from "./repository/db.js";
// import BaseRepository from "./repository/BaseRepository.js";
import userRouter from "./routes/users.js";
import UserRepository from "./Repository/UserRepository.js";

import "dotenv/config";

const app = express();
app.use(express.json());

app.use("/users", userRouter);

app.listen(4000, () => {
  return console.log("e-Commerce API running on port 4000");
});
