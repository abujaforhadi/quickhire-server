import mongoose from "mongoose";
import { createServer } from "http";
import app from "./app.js";
import { envVars } from "./config/env.js";

let server;

const startServer = async () => {
  try {
    await mongoose.connect(envVars.DB_URL);

    console.log(" MongoDB connected");

    server = createServer(app);

    server.listen(envVars.PORT, () => {
      console.log(`Server running on port ${envVars.PORT}`);
    });
  } catch (error) {
    console.error("Server start failed:", error);
    process.exit(1);
  }
};

startServer();
