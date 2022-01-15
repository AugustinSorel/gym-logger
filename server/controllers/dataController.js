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

const getCleanDate = (timeId, targetDate) => {
  switch (timeId) {
    case "1W":
      return new Date(targetDate).toISOString().split("T")[0].slice(-2);
    case "1M":
      return new Date(targetDate).toISOString().split("T")[0].slice(-2);

    case "6M": {
      const d = new Date(targetDate).toISOString().split("T")[0];
      const date = d.split("-");
      const f = new Date(date[0], date[1] - 1, date[2]).toString();
      return f.split(" ")[2] + " " + f.split(" ")[1];
    }

    case "1Y": {
      const d = new Date(targetDate).toISOString().split("T")[0];
      const date = d.split("-");
      const f = new Date(date[0], date[1] - 1, date[2]).toString();
      return f.split(" ")[2] + " " + f.split(" ")[1] + " " + f.split(" ")[3];
    }

    case "All":
      const d = new Date(targetDate).toISOString().split("T")[0];
      const date = d.split("-");
      const f = new Date(date[0], date[1] - 1, date[2]).toString();
      return f.split(" ")[2] + " " + f.split(" ")[1] + " " + f.split(" ")[3];
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
    const endDate = getEndDate(timeId, data, exerciseId);

    const finalData = [];
    for (
      let targetDate = startDate;
      targetDate <= endDate;
      targetDate += oneDay
    ) {
      const obj = {
        date: getCleanDate(timeId, targetDate),
        oneRepMax: null,
      };

      // get the oneRepMax for this date
      const dataWhereDateIsToday = data[exerciseId].find(
        (obj) => obj.date.toDateString() === new Date(targetDate).toDateString()
      );

      if (dataWhereDateIsToday) {
        obj.oneRepMax = dataWhereDateIsToday.oneRepMax;
      }

      finalData.push(obj);
    }

    // trim end of array
    let index = 0;
    for (index; index < finalData.length; index++) {
      const element = finalData[index];

      if (element.oneRepMax !== null) break;
    }

    finalData.splice(0, index);

    // trim start of array
    index = finalData.length - 1;
    for (index; index >= 0; index--) {
      const element = finalData[index];

      if (element.oneRepMax !== null) break;
    }

    finalData.splice(index + 1, finalData.length - index - 1);

    // console.log("finalData", finalData);
    res.status(200).json(finalData);
  } catch (error) {
    console.log("ERROR in getValue:", error);
    res.sendStatus(400);
  }
};
