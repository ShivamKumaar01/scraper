import { registerService,loginService } from "../services/auth.service.js";

import generateToken from "../utils/generate-token.js";

import cookieOptions from "../utils/cookie-options.js";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await registerService(name, email, password);

    res.status(201).json({
      success: true,
      message: "User Registered Successfully",
      
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await loginService(email, password);

    const token = generateToken(user._id);

    res.cookie("token", token, cookieOptions);

    res.status(200).json({
      success: true,
      message: "Login Successful",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const logoutUser = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
