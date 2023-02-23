import { Router } from "express";
import { allData } from "../middleware/exportData.js";

export const playerRouter = Router();

playerRouter.get("/data/:id", (req, res) => {
  const { id } = req.params;
  const data = allData.filter((e) => e.id === id);

  if (data.length === 0) {
    res.status(404).send({ message: "Data Not Found" });
    return;
  }

  res.send(data[0]);
});
