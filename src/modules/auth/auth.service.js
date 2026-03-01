import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "./auth.model.js";

const generateToken = (user) =>
  jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

export const registerUser = async (payload) => {
  const { name, email, password, role } = payload;

  const exists = await User.findOne({ email });
  if (exists) throw new Error("User already exists");

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    role,
  });

  const safeUser = {
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
  };

  return {
    token: generateToken(user),
    user: safeUser,
  };
};
export const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ email }).select("+password");

  if (!user) throw new Error("Invalid credentials");

  const match = await bcrypt.compare(password, user.password);
  if (!match) throw new Error("Invalid credentials");

  const safeUser = {
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
  };

  return {
    token: generateToken(user),
    user: safeUser,
  };
};
