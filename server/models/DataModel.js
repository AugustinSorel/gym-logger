import mongoose from "mongoose";

const arr = [
  {
    oneRepMax: Number,
    date: Date,
  },
];

const dataSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  "Bench Press": arr,
  "Biceps Curl": arr,
  "Tricep Extension": arr,
  "Pull Ups": arr,
  "Shoulder Press": arr,
  "Leg Curl": arr,
  "Leg Press": arr,
  Squat: arr,
});

export default mongoose.model("Data", dataSchema);
