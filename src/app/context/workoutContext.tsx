'use client'

import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';
import { IWorkout } from '../types/workout';
interface IworkoutProps {
    plan: IWorkout[]
    setPlan: Dispatch<SetStateAction<IWorkout[]>>
    saved: IWorkout[]
    setSaved: Dispatch<SetStateAction<IWorkout[]>>
}
export const WorkoutContext = createContext<IworkoutProps | undefined>(undefined)
const WorkoutContextProvider = ({ children }: { children: ReactNode }) => {
    const [plan, setPlan] = useState<IWorkout[]>([]);
    const [saved, setSaved] = useState<IWorkout[]>([]);
    const sharedData:IworkoutProps = {
        plan,
        setPlan,
        saved,
        setSaved
    }
    return (
        <div>
            <WorkoutContext.Provider value={sharedData}>{children}</WorkoutContext.Provider>
        </div>
    );
};

export default WorkoutContextProvider;