'use client'
import React from 'react';
import { FaCalendarPlus } from 'react-icons/fa';
import { IWorkout } from '../types/workout';
import useWorkout from '../hooks/useWorkout';
import { toast } from 'react-toastify';
import { CiBookmark } from 'react-icons/ci';

const WorkoutActions = ({ workouts }: { workouts: IWorkout }) => {
    // console.log(workouts,'from actions');
    const { plan, setPlan, saved, setSaved } = useWorkout()

    const handleAddPlan = () => {
       const plans = plan.some((workout => workout.id === workouts.id))
       if(plans){
         return toast.error(' Workout already added')

       }
        setPlan([...plan,workouts])
        toast.success(`${workouts.name} Added`)

    }
    const handleSavePlan = () => {
        const savedPlan = saved.some((workout => workout.id === workouts.id))
        if(savedPlan){
            return toast.error(' Workout already added')
        }
        setSaved([...saved, workouts])
        toast.success(`${workouts.name}Added To Save`)
    }
    return (
        <div>
            <div className="flex flex-wrap gap-2">
                <button onClick={() => handleAddPlan()} className="rounded-2xl bg-[#C2F800] p-3 text-black transition hover:scale-105">
                    <span className="flex items-center justify-center gap-2">
                        <FaCalendarPlus />
                        Add to today's plan
                    </span>
                </button>

                <button onClick={() => handleSavePlan()} className="rounded-2xl border border-gray-400 bg-transparent p-3 text-white transition hover:bg-white hover:text-black">
                    <span className="flex items-center justify-center gap-2">
                        <CiBookmark />
                        Save for later
                    </span>
                </button>
            </div>
        </div>
    );
};

export default WorkoutActions;