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

export const getValue = async (req, res) => {
  try {
    const { userId, exerciseId } = req.params;

    var start = new Date(new Date().getTime() - 7 * 60 * 60 * 24 * 1000); // get date of last week
    const data = await DataModel.findById({
      _id: userId,
    });

    console.log("data:", data[exerciseId]);

    const filteredData = data[exerciseId].filter((obj) => {
      return obj.date >= start.getTime();
    });

    console.log("filteredData:", filteredData);

    res.status(200).json(filteredData);
  } catch (error) {
    console.log("ERROR in getValue:", error);
    res.sendStatus(400);
  }
};
