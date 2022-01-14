import express from "express";
import { addValue } from "../controllers/dataController.js";

const Router = express.Router();

Router.post("/:userId/:exerciseId", addValue);

export default Router;
