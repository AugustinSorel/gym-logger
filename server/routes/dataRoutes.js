import express from "express";
import { addValue, getValue } from "../controllers/dataController.js";

const Router = express.Router();

Router.post("/:userId/:exerciseId", addValue);
Router.get("/:userId/:exerciseId", getValue);

export default Router;
