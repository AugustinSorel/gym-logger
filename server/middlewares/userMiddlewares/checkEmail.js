import UserModel from "../../models/UserModel.js";

const checkEmail = async (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    console.log("email is required");
    return res.status(400).json({
      errorField: "email",
      error: "Email is required",
    });
  }

  if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
    console.log("email is not valid");
    return res.status(400).json({
      errorField: "email",
      error: "Invalid email format",
    });
  }

  const user = await UserModel.findOne({ email });
  if (user) {
    console.log("email already exist");
    return res.status(400).json({
      errorField: "email",
      error: "email already exist",
    });
  }

  next();
};

export default checkEmail;
