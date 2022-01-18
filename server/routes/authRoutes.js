import express from "express";
import { getUser } from "../controllers/authControllers.js";
import { verifyToken } from "../middlewares/authMiddleares/verifyToken.js";

const authRouter = express.Router();

authRouter.get("/get-user", verifyToken, getUser);

export default authRouter;
