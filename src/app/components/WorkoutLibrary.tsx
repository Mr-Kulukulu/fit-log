import React from "react";
import { IWorkout } from "../types/workout";
import WorkoutCard from "./WorkoutCard";

const getWorkoutData = async (): Promise<IWorkout[]> => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

    if (!res.ok) {
        throw new Error("Workout Data Fetch Failed");
    }

    return res.json();
};

const WorkoutLibrary = async () => {
    const data = await getWorkoutData();

    return (
        <div
            className="container mx-auto my-11 grid gap-5 px-4"
            id="library"
        >
            <div>
                <h2 className="text-2xl font-bold">THE LIBRARY</h2>

                <p>Twelve lifts covering every major muscle group.</p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {data.map((workout) => (
                    <WorkoutCard
                        key={workout.id}
                        workout={workout}
                    />
                ))}
            </div>
        </div>
    );
};

export default WorkoutLibrary;