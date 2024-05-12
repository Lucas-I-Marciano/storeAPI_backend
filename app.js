import pool from "./Repository/db.js";
import express from "express";
import userRouter from "./routes/users.js";

import "dotenv/config";

const app = express();
app.use(express.json());

app.use("/users", userRouter);

app.listen(4000, () => {
  return console.log("e-Commerce API running on port 3000");
});
