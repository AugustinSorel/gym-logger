import express from "express";
import { addValue } from "../controllers/userControllers.js";

const Router = express.Router();

Router.post("/:userId/:exerciseId", addValue);

export default Router;
