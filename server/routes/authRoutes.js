import express from "express";
import { getUser } from "../controllers/authControllers.js";

const authRouter = express.Router();

authRouter.get("/get-user", getUser);

export default authRouter;
