import getOneRepMax from "../utils/getOneRepMax.js";

export const addValue = async (req, res) => {
  try {
    const { userId, exerciseId } = req.params;
    const { numberOfRepetitions, weight } = req.body;

    const oneRepMax = getOneRepMax(weight, numberOfRepetitions);

    console.log("oneRepMax", oneRepMax);

    res.status(200).json([]);
  } catch (error) {
    console.log("ERROR in addValue:", error);
    res.sendStatus(400);
  }
};
