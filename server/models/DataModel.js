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
  Squat: arr,
});

export default mongoose.model("Data", dataSchema);
