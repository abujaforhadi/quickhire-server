import Application from "./application.model.js";
import Job from "../jobs/job.model.js";

export const createApplication = async (payload) => {
  const job = await Job.findById(payload.job_id);

  if (!job) {
    throw new Error("Job not found");
  }

  return await Application.create(payload);
};
export const getAllApplications = async () => {
  return await Application.find()
    .populate("job_id")
    .populate("user_id", "name email");
};

export const getMyApplications = async (userId) => {
  return await Application.find({ user_id: userId })
    .populate("job_id");
};