import DataModel from "../models/DataModel.js";
import getOneRepMax from "../utils/getOneRepMax.js";

export const addValue = async (req, res) => {
  try {
    const { userId, exerciseId } = req.params;
    const { numberOfRepetitions, weight } = req.body;

    const oneRepMax = getOneRepMax(weight, numberOfRepetitions);
    const obj = { date: new Date(), oneRepMax };
    console.log("oneRepMax", oneRepMax);

    // check if user has data for this exercise
    const data = await DataModel.findOne({ _id: userId });
    const exercise = data[exerciseId];

    const dataWhereDateIsToday = exercise.find(
      (obj) => obj.date.toDateString() === new Date().toDateString()
    );

    console.log("dataWhereDateIsToday", dataWhereDateIsToday);

    if (dataWhereDateIsToday) {
      //   const newData = await DataModel.findByIdAndUpdate(
      //     { _id: userId },
      //     {
      //       [exerciseId]: {
      //         $set: { "$[el].oneRepMax": oneRepMax },
      //       },
      //     },
      //     {
      //       returnOriginal: false,
      //       arrayFilters: [{ "el._id": dataWhereDateIsToday._id }],
      //       new: true,
      //     }
      //   );
      //   console.log("newData", newData);
    } else {
      await DataModel.findByIdAndUpdate(
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
    }

    // console.log("data", data);

    res.status(200).json(data);
  } catch (error) {
    console.log("ERROR in addValue:", error);
    res.sendStatus(400);
  }
};

const getSubstractionDate = (timeId) => {
  switch (timeId) {
    case "1W":
      return 6;
    case "1M":
      return 30;
    case "6M":
      return 180;
    case "1Y":
      return 365;
    case "All":
      break;
  }

  return "1W";
};

const getStartDate = (timeId, data, oneDay, exerciseId) => {
  if (timeId === "All") {
    return data[exerciseId][0].date.getTime();
  }

  return new Date().getTime() - getSubstractionDate(timeId) * oneDay;
};

const getEndDate = (timeId, data, exerciseId) => {
  if (timeId === "All") {
    return data[exerciseId][data[exerciseId].length - 1].date.getTime();
  }

  return new Date().getTime();
};

// return the date: 2022-01-08T12:36:53.150Z

export const getValue = async (req, res) => {
  try {
    const { userId, exerciseId, timeId } = req.params;
    const data = await DataModel.findById({ _id: userId });

    const oneDay = 1000 * 60 * 60 * 24;

    const startDate = getStartDate(timeId, data, oneDay, exerciseId);

    // get all data that are above the startDate
    const validData = data[exerciseId].filter(
      (obj) => obj.date.getTime() >= startDate
    );

    // console.log("finalData", validData);

    // change the date to a string
    const finalData = validData.map((obj) => {
      console.log("obj date:", obj.date);
      return {
        date: new Date(obj.date).getTime(),
        oneRepMax: obj.oneRepMax,
      };
    });

    console.log("finalData", finalData);

    res.status(200).json(finalData);
  } catch (error) {
    console.log("ERROR in getValue:", error);
    res.sendStatus(400);
  }
};
