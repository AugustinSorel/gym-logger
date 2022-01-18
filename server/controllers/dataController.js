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

const getStartDate = (timeId, data, oneDay, exerciseId) => {
  switch (timeId) {
    case "1W":
      return new Date().getTime() - 6 * oneDay;
    case "1M":
      return new Date().getTime() - 30 * oneDay;
    case "6M":
      return new Date().getTime() - 180 * oneDay;
    case "1Y":
      return new Date().getTime() - 365 * oneDay;
    case "All":
      return data[exerciseId][0].date.getTime();
  }

  return "1W";
};

// return the date: 2022-01-08T12:36:53.150Z

export const getValue = async (req, res) => {
  try {
    const { userId, exerciseId, timeId } = req.params;
    const data = await DataModel.findById({ _id: userId });

    if (!data[exerciseId][0]) {
      return res.status(200).json([]);
    }

    const oneDay = 1000 * 60 * 60 * 24;

    const startDate = getStartDate(timeId, data, oneDay, exerciseId);

    // get all data that are above the startDate
    const validData = data[exerciseId].filter(
      (obj) => obj.date.getTime() >= startDate
    );

    // change the date to miliseconds
    const finalData = validData.map((obj) => {
      return {
        date: new Date(obj.date).getTime(),
        oneRepMax: obj.oneRepMax,
      };
    });

    res.status(200).json(finalData);
  } catch (error) {
    console.log("ERROR in getValue:", error);
    res.sendStatus(400);
  }
};
