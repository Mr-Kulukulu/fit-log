
import WorkoutActions from "@/app/components/WorkoutActions";
import { IWorkout } from "@/app/types/workout";
import Image from "next/image";
import React from "react";
import { FaCalendarPlus } from "react-icons/fa";

const WorksoutDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const res = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${id}`
  );

  if (!res.ok) {
    throw new Error("Workout not found");
  }

  const workouts: IWorkout = await res.json();

  return (
    <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-10 md:grid-cols-2">
      {/* Left - Image */}
      <div>
        <Image
          src={workouts.image}
          alt={workouts.name}
          width={500}
          height={500}
          className="h-full max-h-[500px] w-full rounded-xl object-cover"
        />
      </div>

      {/* Right - Details */}
      <div className="space-y-5">
        {/* Title */}
        <h2 className="text-3xl font-bold">{workouts.name}</h2>

        {/* Description */}
        <p className="text-gray-400">{workouts.description}</p>

        {/* Muscle Groups */}
        <div className="flex flex-wrap gap-2">
          {workouts.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded border border-[#C2F800] bg-[#C2F800] px-2 py-1 text-xs font-semibold text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Workout Specs */}
        <div className="grid grid-cols-2 gap-4 rounded-2xl bg-[#1E2330] p-5">
          <div className="space-y-3">
            <p>EQUIPMENT</p>
            <p>DIFFICULTY</p>
            <p>SETS</p>
            <p>REPS</p>
            <p>DURATION</p>
            <p>CALORIES</p>
            <p>RATING</p>
          </div>

          <div className="space-y-3 text-gray-300">
            <p>{workouts.equipment}</p>
            <p>{workouts.difficulty}</p>
            <p>{workouts.sets}</p>
            <p>{workouts.reps}</p>
            <p>{workouts.duration} min</p>
            <p>{workouts.caloriesBurned} kcal</p>
            <p>{workouts.rating}</p>
          </div>
        </div>

        {/* Instructions */}
        <div>
          <h2 className="mb-3 text-xl font-bold">INSTRUCTIONS</h2>

          <ol className="list-decimal space-y-2 pl-5 text-gray-300">
            {workouts.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>

        {/* Buttons */}
       <WorkoutActions workouts={workouts}></WorkoutActions>
      </div>
    </div>
  );
};

export default WorksoutDetailsPage;

