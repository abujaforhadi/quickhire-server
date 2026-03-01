import dotenv from "dotenv";
import "dotenv/config";

dotenv.config();

export const envVars = {
  PORT: process.env.PORT || 5000,
  DB_URL: process.env.MONGO_URI,
};
