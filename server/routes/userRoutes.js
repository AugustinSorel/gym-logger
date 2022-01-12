import express from "express";
import { addValue, userSignUp } from "../controllers/userControllers.js";
import checkEmail from "../middlewares/userMiddlewares/checkEmail.js";
import checkName from "../middlewares/userMiddlewares/checkName.js";
import checkPassword from "../middlewares/userMiddlewares/checkPassword.js";

const Router = express.Router();

Router.post("/sign-up", checkName, checkEmail, checkPassword, userSignUp);
Router.post("/:userId/:exerciseId", addValue);

export default Router;
