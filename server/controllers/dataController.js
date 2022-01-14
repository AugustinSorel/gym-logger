import DataModel from "../models/DataModel.js";
import getOneRepMax from "../utils/getOneRepMax.js";

export const addValue = async (req, res) => {
  try {
    const { userId, exerciseId } = req.params;
    const { numberOfRepetitions, weight } = req.body;

    const oneRepMax = getOneRepMax(weight, numberOfRepetitions);
    const obj = { date: new Date(), oneRepMax };
    console.log("oneRepMax", oneRepMax);

    const data = await DataModel.findByIdAndUpdate(
      { _id: userId },
      {
        $push: {
          [exerciseId]: obj,
        },
      },
      {
        returnOriginal: false,
      }
    );

    console.log("data", data);

    res.status(200).json(data);
  } catch (error) {
    console.log("ERROR in addValue:", error);
    res.sendStatus(400);
  }
};
