import React from 'react';
import { IWorkout } from '../types/workout';
import WorkoutCard from './WorkoutCard';
const getWorkoutData = async ():Promise<IWorkout[]> =>{
const res = await fetch('https://api.abcz.workers.dev/api/fitlog')
return res.json()
}
const WorkoutLibrary = async () => {
    const data = await getWorkoutData()
    console.log(data);
    return (

        <div>
            <h2>THE LIBRARY</h2>
            <p>Twelve lifts covering every major muscle group.</p>
            <div>
                {
                    data.map(workout =><WorkoutCard key={workout.id} workout={workout}></WorkoutCard>)
                }
            </div>
        </div>
    );
};

export default WorkoutLibrary;