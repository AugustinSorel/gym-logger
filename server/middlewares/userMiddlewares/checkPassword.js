const checkPassword = (req, res, next) => {
  const { password } = req.body;

  if (!password) {
    console.log("password is required");
    return res.status(400).json({
      errorField: "password",
      error: "Password is required",
    });
  }

  next();
};

export default checkPassword;
