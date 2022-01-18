import express from "express";
import { addValue, getValue } from "../controllers/dataController.js";
import { verifyToken } from "../middlewares/authMiddleares/verifyToken.js";
import checkValues from "../middlewares/dataMiddleware/checkValues.js";

const Router = express.Router();

Router.post("/:userId/:exerciseId", verifyToken, checkValues, addValue);
Router.get("/:userId/:exerciseId/:timeId", verifyToken, getValue);

export default Router;
