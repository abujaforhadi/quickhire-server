import * as ApplicationService from "./application.service.js";

export const submitApplication = async (req, res) => {
  try {
    const application =
      await ApplicationService.createApplication(
        req.body,
        req.user
      );

    res.status(201).json({
      message: "Application submitted successfully",
      application,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
export const getApplications = async (req, res) => {
  const data =
    await ApplicationService.getAllApplications();

  res.json(data);
};

export const getMyApplications = async (req, res) => {
  const data =
    await ApplicationService.getMyApplications(req.user.id);

  res.json(data);
};