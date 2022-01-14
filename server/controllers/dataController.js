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

export const getValue = async (req, res) => {
  try {
    const { userId, exerciseId, timeId } = req.params;

    const data = await DataModel.findById({
      _id: userId,
    });

    console.log("data:", data[exerciseId]);
    console.log("timeId:", timeId);

    if (timeId === "week") {
      const start = new Date(new Date().getTime() - 7 * 60 * 60 * 24 * 1000); // get date of last week
      const filteredData = data[exerciseId].filter((obj) => {
        return obj.date >= start.getTime();
      });

      // console.log("filteredData:", filteredData);

      const cleanData = filteredData.map((obj) => {
        return {
          date: obj.date.toISOString().split("T")[0].slice(-2),
          oneRepMax: obj.oneRepMax,
        };
      });

      console.log("cleanData:", cleanData);

      res.status(200).json(cleanData);
    }

    if (timeId === "month") {
      const start = new Date(new Date().getTime() - 30 * 60 * 60 * 24 * 1000); // get date of last week
      const filteredData = data[exerciseId].filter((obj) => {
        return obj.date >= start.getTime();
      });

      // console.log("filteredData:", filteredData);

      const cleanData = filteredData.map((obj) => {
        return {
          date: obj.date.toISOString().split("T")[0].slice(-2),
          oneRepMax: obj.oneRepMax,
        };
      });

      console.log("cleanData:", cleanData);

      res.status(200).json(cleanData);
    }

    if (timeId === "6months") {
      const start = new Date(
        new Date().getTime() - 6 * 30 * 60 * 60 * 24 * 1000
      ); // get date of last week
      const filteredData = data[exerciseId].filter((obj) => {
        return obj.date >= start.getTime();
      });

      // console.log("filteredData:", filteredData);

      const cleanData = filteredData.map((obj) => {
        const d = obj.date.toISOString().split("T")[0];
        var date = d.split("-");
        var f = new Date(date[0], date[2] - 1, date[1]).toString();
        const cleanDate = f.split(" ")[2] + " " + f.split(" ")[1] + " ";
        return {
          date: cleanDate,
          oneRepMax: obj.oneRepMax,
        };
      });

      console.log("cleanData:", cleanData);

      res.status(200).json(cleanData);
    }

    if (timeId === "year") {
      const start = new Date(
        new Date().getTime() - 12 * 30 * 60 * 60 * 24 * 1000
      ); // get date of last week
      const filteredData = data[exerciseId].filter((obj) => {
        console.log("obj.date:", obj.date);
        console.log("start.getTime():", start.getTime());
        return obj.date >= start.getTime();
      });

      // console.log("filteredData:", filteredData);

      const cleanData = filteredData.map((obj) => {
        const d = obj.date.toISOString().split("T")[0];
        var date = d.split("-");
        var f = new Date(date[0], date[2] - 1, date[1]).toString();
        const cleanDate =
          f.split(" ")[2] + " " + f.split(" ")[1] + " " + f.split(" ")[3];
        return {
          date: cleanDate,
          oneRepMax: obj.oneRepMax,
        };
      });

      console.log("cleanData:", cleanData);

      res.status(200).json(cleanData);
    }

    if (timeId === "all") {
      const cleanData = data[exerciseId].map((obj) => {
        const d = obj.date.toISOString().split("T")[0];
        var date = d.split("-");
        var f = new Date(date[0], date[2] - 1, date[1]).toString();
        const cleanDate = f.split(" ")[2] + " " + f.split(" ")[1] + " ";
        return {
          date: cleanDate,
          oneRepMax: obj.oneRepMax,
        };
      });

      console.log("cleanData:", cleanData);

      res.status(200).json(cleanData);
    }
  } catch (error) {
    console.log("ERROR in getValue:", error);
    res.sendStatus(400);
  }
};
