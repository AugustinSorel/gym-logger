import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  benchPress: [],
  squat: [],
  bicepsCurl: [],
});

export default mongoose.model("User", UserSchema);
