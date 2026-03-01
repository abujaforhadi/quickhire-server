import express from "express";
import {
  getApplications,
  getMyApplications,
  submitApplication,
} from "./application.controller.js";
import { adminOnly, protect } from "../../middleware/auth.middleware.js";

const applicationRoutes = express.Router();

applicationRoutes.post("/", protect, submitApplication);
applicationRoutes.get("/", protect, adminOnly, getApplications);
applicationRoutes.get("/my", protect, getMyApplications);

export default applicationRoutes;
