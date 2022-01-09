export const addValue = (req, res) => {
  console.log("userId:", req.params.userId);
  console.log("exerciseId:", req.params.exerciseId);
  console.log("value:", req.body.value);
  res.sendStatus(200);
};
