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

  next();
};

export default checkName;
