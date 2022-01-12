import express from "express";
import { addValue, userSignUp } from "../controllers/userControllers.js";
import checkName from "../middlewares/userMiddlewares/checkName.js";

const Router = express.Router();

Router.post("/sign-up", checkName, userSignUp);
Router.post("/:userId/:exerciseId", addValue);

export default Router;
