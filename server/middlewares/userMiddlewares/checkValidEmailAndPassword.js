import bcrypt from "bcrypt";
import UserModel from "../../models/UserModel.js";

const checkValidEmailAndPassword = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email });
  if (!user) {
    console.log("email is not valid");
    return res.status(400).json({
      errorField: "email",
      error: "Invalid email",
    });
  }

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    console.log("password is not valid");
    return res.status(400).json({
      errorField: "password",
      error: "Invalid password",
    });
  }

  res.locals.userId = user._id;
  next();
};

export default checkValidEmailAndPassword;
