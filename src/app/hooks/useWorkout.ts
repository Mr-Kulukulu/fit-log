import { useContext } from "react";
import { WorkoutContext } from "../context/workoutContext";

const useWorkout = () => {
    const context = useContext(WorkoutContext);

    if (!context) {
        throw new Error("useWorkout must be used inside WorkoutContextProvider");
    }

    return context;
};
export default useWorkout;