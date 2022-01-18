import express from "express";
import {
  deleteUserById,
  getUserById,
  updateUserById,
  userLogin,
  userSignUp,
} from "../controllers/userControllers.js";
import { verifyToken } from "../middlewares/authMiddleares/verifyToken.js";
import checkEmail from "../middlewares/userMiddlewares/checkEmail.js";
import checkName from "../middlewares/userMiddlewares/checkName.js";
import checkPassword from "../middlewares/userMiddlewares/checkPassword.js";
import checkValidEmailAndPassword from "../middlewares/userMiddlewares/checkValidEmailAndPassword.js";

const Router = express.Router();

Router.post("/sign-up", checkName, checkEmail, checkPassword, userSignUp);
Router.post("/login", checkValidEmailAndPassword, userLogin);

Router.get("/:userId", verifyToken, getUserById);
Router.patch(
  "/:userId",
  verifyToken,
  checkName,
  checkEmail,
  checkPassword,
  updateUserById
);
Router.delete("/:userId", verifyToken, deleteUserById);

export default Router;
