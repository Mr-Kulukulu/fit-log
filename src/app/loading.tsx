import React from 'react';

const loading = () => {
    return (
        <div className="flex min-h-[70vh] items-center justify-center bg-[#111318]">

            <div className="flex flex-col items-center gap-4">
                {/* Spinner */}
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-700 border-t-[#C2F800]" /> {/* Text */} <p className="text-sm font-medium tracking-wider text-gray-400"> LOADING WORKOUTS... </p> </div> </div>
    );
};

export default loading;