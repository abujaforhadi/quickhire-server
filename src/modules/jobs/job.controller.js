import * as JobService from "./job.service.js";

export const createJob = async (req, res) => {
  try {
    const job = await JobService.createJob(req.body);
    res.status(201).json(job);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getJobs = async (req, res) => {
  const jobs = await JobService.getAllJobs(req.query);
  res.json(jobs);
};

export const getJobById = async (req, res) => {
  const job = await JobService.getSingleJob(req.params.id);

  if (!job)
    return res.status(404).json({ message: "Job not found" });

  res.json(job);
};

export const deleteJob = async (req, res) => {
  await JobService.deleteJob(req.params.id);
  res.json({ message: "Job deleted" });
};