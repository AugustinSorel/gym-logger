import UserModel from "../../models/UserModel.js";

const checkName = async (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    console.log("name is required");
    return res.status(400).json({
      errorField: "name",
      error: "Name is required",
    });
  }

  if (!/^[a-zA-Z]+$/.test(name)) {
    console.log("name is not valid");
    return res.status(400).json({
      errorField: "name",
      error: "Invalid name format",
    });
  }

  const user = await UserModel.findOne({ name });
  if (user) {
    console.log("name already exist");
    return res.status(400).json({
      errorField: "name",
      error: "name already exist",
    });
  }

  next();
};

export default checkName;
