import jwt from "jsonwebtoken";

export const checkToken = (req, res, next) => {
  const token = req.cookies["jwt"];
  console.log(token);

  try {
    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
        if (!err) {
          res.locals.userId = decodedToken._id;
          next();
        } else {
          throw "invalid token";
        }
      });
    } else {
      throw "no token";
    }
  } catch (error) {
    console.log("ERROR in check token Middleware: ", error);
    res.sendStatus(401);
  }
};
