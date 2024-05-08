import pool from "./Repository/db.js";
import express from "express";

import "dotenv/config";

const app = express();

app.get("/", (req, res) => {
  const result = pool.query("SELECT * FROM users").rows;
  res.status(200).send(result);
});

app.listen(4000, () => {
  return console.log("e-Commerce API running on port 3000");
});
