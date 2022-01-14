import UserModel from "../models/UserModel.js";
import jwt from "jsonwebtoken";
import DataModel from "../models/DataModel.js";

export const userSignUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await UserModel.create({ name, email, password });
    await DataModel.create({ _id: user._id });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.status(200).json({ token: token, user: user });
  } catch (error) {
    if (error.code === 11000) {
      const errorField = Object.keys(error.keyValue)[0];

      return res.status(400).json({
        errorField: errorField,
        error: `${errorField} already exist`,
      });
    }

    console.log("ERROR in userSignUp:", error);
    res.sendStatus(400);
  }
};

export const userLogin = async (req, res) => {
  try {
    const user = res.locals.user;
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.status(200).json({ token: token, user: user });
  } catch (error) {
    console.log("ERROR in userLogin:", error);
    res.sendStatus(400);
  }
};

export const getUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await UserModel.findById(userId);

    if (!user) {
      throw "user not found";
    }

    console.log("USER FOUND", user);
    res.status(200).json(user);
  } catch (error) {
    console.log("ERROR in getUserById:", error);
    res.sendStatus(400);
  }
};

export const deleteUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await UserModel.findByIdAndDelete(userId);

    console.log("USER DELETED", user);
    res.status(200).json(user);
  } catch (error) {
    console.log("ERROR in deleteUserById:", error);
    res.sendStatus(400);
  }
};

export const updateUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    const { name, email } = req.body;

    const user = await UserModel.findByIdAndUpdate(
      userId,
      { name, email },
      { new: true }
    );

    console.log("USER UPDATED", user);
    res.status(200).json(user);
  } catch (error) {
    if (error.code === 11000) {
      const errorField = Object.keys(error.keyValue)[0];

      return res.status(400).json({
        errorField: errorField,
        error: `${errorField} already exist`,
      });
    }

    res.sendStatus(400);
  }
};
