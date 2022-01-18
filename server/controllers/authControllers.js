import UserModel from "../models/UserModel.js";
import jwt from "jsonwebtoken";

export const getUser = async (req, res) => {
  try {
    // get cookie from request
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    let userId = null;

    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
        if (!err) {
          const { id } = decodedToken;
          userId = id;
        } else {
          throw "invalid token";
        }
      });
    } else {
      throw "no token";
    }

    const user = await UserModel.findById(userId);

    res.status(200).json(user);
  } catch (error) {
    console.log("ERROR in getUser route:", error);
    res.status(500).json(error);
  }
};
