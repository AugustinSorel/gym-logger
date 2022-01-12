import UserModel from "../models/UserModel.js";
import jwt from "jsonwebtoken";

export const userSignUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await UserModel.create({ name, email, password });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.status(200).json(token);
  } catch (error) {
    console.log("ERROR in userSignUp:", error);
    res.sendStatus(400);
  }
};

export const addValue = (req, res) => {
  console.log("userId:", req.params.userId);
  console.log("exerciseId:", req.params.exerciseId);
  console.log("value:", req.body.value);
  res.sendStatus(200);
};
