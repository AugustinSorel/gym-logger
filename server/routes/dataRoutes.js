import express from "express";
import { addValue, getValue } from "../controllers/dataController.js";
import checkValues from "../middlewares/dataMiddleware/checkValues.js";

const Router = express.Router();

Router.post("/:userId/:exerciseId", checkValues, addValue);
Router.get("/:userId/:exerciseId/:timeId", getValue);

export default Router;
