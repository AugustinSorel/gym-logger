import express from "express";
import { addValue } from "../controllers/userControllers.js";

const Router = express.Router();

Router.post("/addValue", addValue);

export default Router;
