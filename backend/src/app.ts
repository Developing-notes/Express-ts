import express, { Application, Request, Response } from "express";
import mongoose from "mongoose";
import config from "./config/config";
import admin from "./routes/nimda";
import product from "./routes/tcudorp";
const app: Application = express(); //interface purpose

app.get("/", (req: Request, res: Response) => {
  res.send("hello");
});

app.use(express.json());

app.use("/admin", admin);
app.use("/product", product);

const port= config.server.port
mongoose
  .connect(config.mongo.url, config.mongo.options)
  .then((result) => {
    console.log("Mongoose connected");
  })
  .catch((error) => {
    console.log("error: ", error);
  });

app.listen(port, () => console.log(`Sever running ${port}`));
