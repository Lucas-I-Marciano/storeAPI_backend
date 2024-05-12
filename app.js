import pool from "./repository/db.js";
import express from "express";
import BaseRepository from "./repository/BaseRepository.js";

import "dotenv/config";

import usersRouter from "./routes/users.js";

const app = express();

app.use("/users", usersRouter);

app.get("/users", async (req, res) => {
  const result = await new BaseRepository().getAll("users");
  res.status(200).send(result);
});

app.listen(4000, () => {
  return console.log("e-Commerce API running on port 3000");
});
