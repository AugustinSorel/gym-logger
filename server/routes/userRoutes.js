import express from "express";
import {
  addValue,
  getUserById,
  userLogin,
  userSignUp,
} from "../controllers/userControllers.js";
import checkEmail from "../middlewares/userMiddlewares/checkEmail.js";
import checkName from "../middlewares/userMiddlewares/checkName.js";
import checkPassword from "../middlewares/userMiddlewares/checkPassword.js";
import { checkToken } from "../middlewares/userMiddlewares/checkToken.js";
import checkValidEmailAndPassword from "../middlewares/userMiddlewares/checkValidEmailAndPassword.js";

const Router = express.Router();

Router.post("/sign-up", checkName, checkEmail, checkPassword, userSignUp);
Router.post("/login", checkValidEmailAndPassword, userLogin);

Router.get("/:userId", getUserById);

Router.post("/:userId/:exerciseId", addValue);

export default Router;
