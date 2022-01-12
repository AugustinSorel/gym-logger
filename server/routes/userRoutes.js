import express from "express";
import { addValue, userSignUp } from "../controllers/userControllers.js";

const Router = express.Router();

Router.post("/sign-up", userSignUp);
Router.post("/:userId/:exerciseId", addValue);

export default Router;
