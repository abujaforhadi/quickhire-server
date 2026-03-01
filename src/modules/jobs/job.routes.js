import express from "express";
import { createJob, getJobs, getJobById, deleteJob } from "./job.controller.js";

import { protect, adminOnly } from "../../middleware/auth.middleware.js";

const jobRoutes = express.Router();

jobRoutes.get("/", getJobs);
jobRoutes.get("/:id", getJobById);
jobRoutes.post("/", protect, adminOnly, createJob);
jobRoutes.delete("/:id", protect, adminOnly, deleteJob);

export default jobRoutes;
