import React from "react";

export default function Todo({todoName, createdAt, handlerDelete, handlerTodo}: any) {
    return(
        <div className="w-[20rem] h-auto items-center flex p-3 border border-gray-400 justify-between rounded-lg">
            <div className="font-semibold mr-1 select-none" onClick={handlerTodo}>
                {todoName}
            </div>
            <div className="font-normal select-none">
                {`createdAt: ${createdAt}`}
            </div>
            <button className="w-[5rem] bg-pink-500 text-white h-auto p-2 rounded-lg ml-1 select-none"
                    onClick={handlerDelete}>
                DELETE
            </button>
        </div>
    )
}