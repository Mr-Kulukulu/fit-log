import React from 'react';
import { IWorkout } from '../types/workout';
import Image from 'next/image';
import { CiClock2, CiStar } from 'react-icons/ci';
import { PiFireSimpleFill } from 'react-icons/pi';

const WorkoutCard = ({ workout }: { workout: IWorkout }) => {
    return (
        <div  className="overflow-hidden rounded-xl border border-gray-700 bg-[#222630] cursor-pointer">
            {/* Image */}
            <div>
                <Image
                    src={workout.image}
                    alt={workout.name}
                    width={300}
                    height={300}
                    className="h-56 w-full object-cover"
                />
            </div>

            {/* Card Content */}
            <div className="p-4">
                {/* Muscle Groups */}
                <div className="flex gap-2">
                    {workout.muscleGroups.map((muscle) => (
                        <span
                            key={muscle}
                            className="rounded border border-[#C2F800] bg-[#C2F800] px-2 py-1 text-xs font-semibold text-black"
                        >
                            {muscle}
                        </span>
                    ))}
                </div>

                {/* Name */}
                <h2 className="mt-3 text-xl font-bold">
                    {workout.name}
                </h2>

                {/* Equipment */}
                <p className="mt-1 text-sm text-gray-400">
                    {workout.equipment}
                </p>

                {/* Divider */}
                <div className="my-4 border-b border-gray-600"></div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-300">
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
    );
};

export default WorkoutCard;