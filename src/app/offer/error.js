'use client';

import {useEffect} from 'react';
export default function Error({error, reset}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className={"flex justify-center items-center flex-col"}>
            <h2 className={"text-white mt-12 mb-4 font-semibold text-xl"}>Ups, No pudimos cargar la oferta! :(</h2>
            <button
                className={"mb-6 shadow-lg shadow-indigo-500/50 bg-indigo-500 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 " +
                    "focus:ring-offset-slate-50 text-white font-semibold h-12 px-12 rounded-lg w-full flex items-center justify-center sm:w-auto"}
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                Vuelve a intentarlo
            </button>
        </div>
    );
}