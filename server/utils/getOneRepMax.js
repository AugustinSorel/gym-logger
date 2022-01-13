const getOneRepMax = (weight, reps) => {
  return weight * (36 / (37 - reps));
};

export default getOneRepMax;
