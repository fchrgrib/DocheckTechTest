import React from "react";

export default function ({value, handlerValue, handlerButton}: any ) {
    return(
        <div className="flex">
            <input type='text' value={value} onChange={handlerValue}
                   className="h-[2.4rem] w-[30rem]
                              border border-gray-300 rounded-lg
                              focus:ring-gray-400 focus:border-gray-400 focus:outline-none focus:ring-offset-1
                              p-2 text-[1rem] pl-4"/>
            <button className="h-[2.4rem] w-[5rem]
                                font-semibold bg-pink-400 mx-1
                                p-2 text-white rounded-lg
                                "
                    onClick={handlerButton}
            >
                SEARCH
            </button>
        </div>
    )
}