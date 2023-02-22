import { Router } from "express";
import { readFileSync } from "node:fs";

export const playerRouter = Router();

const allData = JSON.parse(readFileSync("data/allData.json"));

playerRouter.get("/data/:id", (req, res) => {
  const { id } = req.params;
  const data = allData.filter((e) => e.id === id);

  if (data.length === 0) {
    res.status(404).send({ message: "Data Not Found" });
    return;
  }

  res.send(data[0]);
});
