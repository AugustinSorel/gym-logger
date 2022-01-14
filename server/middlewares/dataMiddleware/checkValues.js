const checkValues = (req, res, next) => {
  const { numberOfRepetitions, weight } = req.body;

  if (numberOfRepetitions < 1 || numberOfRepetitions > 30) {
    console.log("Number of repetitions is required");
    return res.status(400).json({
      errorField: "numberOfRepetitions",
      error: "Number of repetitions is required",
    });
  }

  if (weight < 1 || weight > 300) {
    console.log("Weight is required");
    return res.status(400).json({
      errorField: "weight",
      error: "Weight is required",
    });
  }

  next();
};

export default checkValues;
