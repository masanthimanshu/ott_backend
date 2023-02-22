import express from "express";
import cors from "cors";

import { playerRouter } from "./routes/player.js";
import { categoryRouter } from "./routes/category.js";

const port = process.env.PORT || 5000;
const app = express();

app.use(cors());

app.use("/category", categoryRouter);
app.use("/player", playerRouter);

app.get("/", (req, res) => {
  res.send("It's Working");
});

app.listen(port, () => {
  console.log(`Active on PORT ${port}`);
});
