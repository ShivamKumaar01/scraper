import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const registerService = async (name, email, password) => {

   const existingUser = await User.findOne({ email });

   if (existingUser) {
      throw new Error("User already exists");
   }

   const hashedPassword = await bcrypt.hash(password, 10);

   const user = await User.create({
      name,
      email,
      password: hashedPassword
   });

   return user;
};

export const loginService = async (email, password) => {

  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Invalid Email or Password");
  }

  const isPasswordMatched = await bcrypt.compare(
    password,
    user.password
  );

  if (!isPasswordMatched) {
    throw new Error("Invalid Email or Password");
  }

  return user;
};