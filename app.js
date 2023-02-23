import { playerRouter, categoryRouter } from "./routes/routes.js";
import express from "express";
import cors from "cors";

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
