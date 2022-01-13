import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  data: [
    // add exerciseId and value
  ],
});

UserSchema.pre("save", async function (next) {
  const password = this.password;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  this.password = hashedPassword;
  next();
});

UserSchema.post("save", function (doc, next) {
  console.log(doc);
  next();
});

export default mongoose.model("User", UserSchema);
