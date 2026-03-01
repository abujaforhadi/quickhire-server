import Job from "./job.model.js";

export const createJob = async (payload) => {
  return await Job.create(payload);
};

export const getAllJobs = async (query = {}) => {
  const filter = {};

  if (query.location) {
    filter.location = query.location;
  }

  if (query.category) {
    filter.category = { $in: [query.category] };
  }

  return await Job.find(filter).sort({ createdAt: -1 });
};

export const getSingleJob = async (id) => {
  const job = await Job.findById(id);
  if (!job) throw new Error("Job not found");
  return job;
};

export const deleteJob = async (id) => {
  const job = await Job.findByIdAndDelete(id);
  if (!job) throw new Error("Job not found");
  return job;
};
