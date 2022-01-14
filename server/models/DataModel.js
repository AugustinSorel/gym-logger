import mongoose from "mongoose";

const obj = {
  oneRepMax: Number,
  date: Date,
};

const dataSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  "Bench Press": [obj],
  Squat: [obj],
});

export default mongoose.model("Data", dataSchema);
