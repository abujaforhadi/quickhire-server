import * as AuthService from "./auth.service.js";

export const register = async (req, res) => {
  try {
    const result = await AuthService.registerUser(req.body);

    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const result = await AuthService.loginUser(req.body);

    res.json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
