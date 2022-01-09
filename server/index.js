import expres from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
const app = expres();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGODB_URI)
  .then(() =>
    app.listen(PORT, () =>
      console.log(
        `Server running and connected to db at: http://localhost:${PORT}`
      )
    )
  )
  .catch((err) => console.log(err));

app.use("/api/user", userRoutes);
