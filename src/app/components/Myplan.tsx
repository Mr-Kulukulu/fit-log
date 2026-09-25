"use client";

import React, { useState } from "react";
import useWorkout from "../hooks/useWorkout";
import { CiClock2, CiStar } from "react-icons/ci";
import { PiFireSimpleFill } from "react-icons/pi";
import Image from "next/image";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa";
import { IWorkout } from "../types/workout";

const Myplan = () => {
    const { plan, setPlan, setSaved, saved } = useWorkout();

    const [state, setstate] = useState(true);

    const handleState = (status: boolean) => {
        setstate(status);
    };

    const currentWorkouts = state ? plan : saved;

    const totalMinutes = plan.reduce(
        (total, workout) => total + workout.duration,
        0
    );

    const totalCalories = plan.reduce(
        (total, workout) => total + workout.caloriesBurned,
        0
    );

    const totalMinutesSaved = saved.reduce(
        (total, workout) => total + workout.duration,
        0
    );

    const totalCaloriesSaved = saved.reduce(
        (total, workout) => total + workout.caloriesBurned,
        0
    );

    const currentMinutes = state ? totalMinutes : totalMinutesSaved;
    const currentCalories = state ? totalCalories : totalCaloriesSaved;


    const handleDelete = (workout: IWorkout) => {
        if (state) {
            const updatedPlan = plan.filter(
                (planWorkout) => planWorkout.id !== workout.id
            );

            setPlan(updatedPlan);
        } else {
            const updatedSaved = saved.filter(
                (savedWorkout) => savedWorkout.id !== workout.id
            );

            setSaved(updatedSaved);
        }
    };
    return (
        <div className="container mx-auto px-4 py-10">
            {/* Header */}
            <div className="mb-6">
                <h2 className="text-3xl font-bold">MY PLAN</h2>

                <p className="mt-2 text-gray-400">
                    Cap of five lifts for today. Finish them, then load more.
                </p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-1 gap-4 rounded-2xl border border-gray-400 bg-[#13161D] p-5 sm:grid-cols-3">
                <div>
                    <p className="text-gray-400">Exercises</p>
                    <span className="text-2xl font-bold">
                        {currentWorkouts.length}
                    </span>
                </div>

                <div>
                    <p className="text-gray-400">Minutes</p>
                    <span className="text-2xl font-bold">
                        {currentMinutes}
                    </span>
                </div>

                <div>
                    <p className="text-gray-400">Calories</p>
                    <span className="text-2xl font-bold">
                        {currentCalories}
                    </span>
                </div>
            </div>

            {/* Tabs */}
            <div className="mt-6 flex gap-2">
                <button
                    onClick={() => handleState(true)}
                    className={`btn cursor-pointer ${state
                        ? "bg-[#C2F800] text-black"
                        : "btn-neutral"
                        }`}
                >
                    Today's Plan
                </button>

                <button
                    onClick={() => handleState(false)}
                    className={`btn cursor-pointer ${!state
                        ? "bg-[#C2F800] text-black"
                        : "btn-outline"
                        }`}
                >
                    Saved
                </button>
            </div>

            {/* Conditional Rendering */}
            {currentWorkouts.length === 0 ? (
                <div className="mt-10 rounded-2xl border border-gray-700 bg-[#13161D] p-10 text-center">
                    <h2 className="text-2xl font-bold">NOTHING HERE YET</h2>

                    <p className="mt-2 text-gray-400">
                        {state
                            ? "Add workouts to today's plan and they will appear here."
                            : "Save workouts for later and they will appear here."}
                    </p>
                </div>
            ) : (
                <div className="mt-6 grid gap-4">
                    {currentWorkouts.map((workout) => (
                        <div
                            key={workout.id}
                            className="grid grid-cols-1 gap-5 rounded-xl border border-gray-700 bg-[#222630] p-5 md:grid-cols-2"
                        >
                            {/* Workout Info */}
                            <div className="flex gap-5">
                                <Image
                                    src={workout.image}
                                    alt={workout.name}
                                    width={100}
                                    height={100}
                                    className="rounded-lg object-cover"
                                />

                                <div>
                                    <h2 className="text-xl font-bold">
                                        {workout.name}
                                    </h2>

                                    <p className="text-gray-400">
                                        {workout.equipment}
                                    </p>

                                    <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-gray-300">
                                        <span className="flex items-center gap-1">
                                            <CiClock2 className="text-lg" />
                                            {workout.duration} min
                                        </span>

                                        <span className="flex items-center gap-1">
                                            <PiFireSimpleFill className="text-lg" />
                                            {workout.caloriesBurned} kcal
                                        </span>

                                        <span className="flex items-center gap-1">
                                            <CiStar className="text-lg" />
                                            {workout.rating}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Button */}
                           
                            <div className="flex flex-wrap items-center justify-start gap-2 md:justify-end">
                                {/* View Details */}
                                <Link
                                    href={`/workouts/${workout.id}`}
                                    className="btn btn-sm btn-outline"
                                >
                                    View Details
                                </Link>

                                {/* Mark As Done */}
                                <button
                                    className="btn btn-sm flex-nowrap bg-[#C2F800] px-4 text-black hover:bg-[#b8e600]"
                                >
                                    <FaCheck className="shrink-0" />
                                    <span className="whitespace-nowrap">Mark As Done</span>
                                </button>

                                {/* Delete */}
                                <button
                                    onClick={() => handleDelete(workout)}
                                    className="btn btn-sm btn-square btn-outline text-red-400 hover:bg-red-500 hover:text-white"
                                    aria-label={`Remove ${workout.name}`}
                                >
                                    <RxCross2 />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Myplan;