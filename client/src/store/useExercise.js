import create from "zustand";
import exercisesList from "../utils/exercisesList";

const useExercise = create((set) => ({
  exercise: exercisesList[0],
  setExercise: (exercise) => set(() => ({ exercise: exercise })),

  time: "week",
  setTime: (time) => set(() => ({ time: time })),
}));

export default useExercise;
