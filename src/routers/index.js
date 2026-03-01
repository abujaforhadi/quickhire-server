import express from "express";
import authRoutes from "../modules/auth/auth.routes.js";
import jobRoutes from "../modules/jobs/job.routes.js";
import applicationRoutes from "../modules/applications/application.routes.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/jobs", jobRoutes);
router.use("/applications", applicationRoutes);

export default router;
