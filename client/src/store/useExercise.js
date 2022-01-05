import create from "zustand";
import exercisesList from "../utils/exercisesList";

const useExercise = create((set) => ({
  exercise: exercisesList[0],
  setExercise: (exercise) => set((state) => ({ ...state, exercise })),
}));

export default useExercise;
