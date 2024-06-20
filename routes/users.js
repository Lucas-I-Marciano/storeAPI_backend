import express from "express";
import pool from "../repository/db.js";
import BaseRepository from "../repository/BaseRepository.js";
import UserRepository from "../Repository/UserRepository.js";

const router = express.Router();

router
  .get("/", async (req, res) => {
    const result = await new UserRepository().getAll();
    res.status(200).send(result);
  })
  .get("/:id", async (req, res) => {
    const { id } = req.params;
    // const resultId = await new UserRepository().getById(id);
    const resultId = await new UserRepository().getById(id);
    res.status(200).send(resultId);
  })
  .post("/", async (req, res) => {
    const { body } = req;
    const columnsArray = ["name", "surname", "email"];
    // I need to guarantee the exact order of my insertion
    const valuesArray = columnsArray.reduce((acc, columnName) => {
      acc.push(body[columnName]);
      return acc;
    }, []);

    await new UserRepository().insertOne(valuesArray);
    res.status(200).send();
  })
  .delete("/:id", async (req, res) => {
    const { id } = req.params;
    await new UserRepository().deleteById(id);
    res.status(200).send("Deleted!!");
  })
  .put("/:id", async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    // console.log(Object.values(body)[0]);
    await new UserRepository().updateById(
      Object.keys(body)[0],
      Object.values(body)[0],
      id
    );
    res.status(200).send("Updated!!");
  });

export default router;
