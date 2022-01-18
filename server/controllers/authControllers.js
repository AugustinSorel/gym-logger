import UserModel from "../models/UserModel.js";

export const getUser = async (req, res) => {
  try {
    const userId = res.locals.userId;
    const user = await UserModel.findById(userId);

    console.log("USER FOUND", user);
    res.status(200).json(user);
  } catch (error) {
    console.log("ERROR in getUser route:", error);
    res.status(500).json(error);
  }
};
