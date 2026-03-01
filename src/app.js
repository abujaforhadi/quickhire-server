import express from "express";
import cors from "cors";
import router from "./routers/index.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", router);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to QuickHire server",
  });
});

export default app;