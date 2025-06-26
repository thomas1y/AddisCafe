import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

// Create JWT token
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET_KEY);
};

//! LOGIN USER
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "Email not registered." });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.json({ success: false, message: "Incorrect password." });
    }

    const token = createToken(user._id);
    res.json({
      success: true,
      token,
      name: user.name, // ✅ Include name in response
    });
  } catch (error) {
    console.log("Login error: " + error.message);
    res.status(500).json({ success: false, message: "Server error during login." });
  }
};

//! REGISTER USER
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExist = await userModel.findOne({ email });
    if (userExist) {
      return res.status(403).json({
        success: false,
        message: "Email already exists!",
      });
    }

    if (!validator.isEmail(email)) {
      return res.status(403).json({ success: false, message: "Email is not valid." });
    }

    if (password.length < 8) {
      return res.status(403).json({ success: false, message: "Password must be at least 8 characters." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new userModel({
      name,
      email,
      password: hashedPassword,
      role: "user",
    });

    const newUser = await user.save();

    const token = createToken(newUser._id);
    res.json({
      success: true,
      token,
      name: newUser.name, // ✅ Include name in response
      message: "User has been registered.",
    });
  } catch (error) {
    console.log("Registration failed: " + error.message);
    res.status(500).json({ success: false, message: "Server error during registration." });
  }
};

export { loginUser, registerUser };
