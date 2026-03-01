import express from "express";
// import jobRoutes from "./job.routes.js";
// import applicationRoutes from "./application.routes.js";
// import authRoutes from "./auth.routes.js";

const router = express.Router();

// router.use("/jobs", jobRoutes);
// router.use("/applications", applicationRoutes);
// router.use("/auth", authRoutes);
router.get("/a", (req, res) => {
  res.status(200).json({
    message: "Welcome to QuickHire API",
  });
});

export default router;