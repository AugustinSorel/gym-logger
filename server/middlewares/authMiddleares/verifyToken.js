import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  try {
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
          console.log(err);
          throw "invalid token";
        }
      });
    } else {
      console.log(err);
      throw "no token";
    }

    res.locals.userId = userId;
    next();
  } catch (error) {
    console.log("ERROR in verifyToken:", error);
    res.sendStatus(400);
  }
};
