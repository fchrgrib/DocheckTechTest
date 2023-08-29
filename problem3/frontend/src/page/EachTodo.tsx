import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import CreateNewTodo from "../component/CreateNewTodo";

export default function EachTodo() {
    const {id} = useParams()
    const urlEachList = `http://localhost:8080/each-list/spes/${id}`
    const [valueEachList, setValueEachList] = useState([])
    const [valueCreate, setValueCreate] = useState('')

    useEffect(()=>{
        getEachList()
    })
    const getEachList = async () =>{
        try {
            const response = await axios.get(urlEachList)
            if (response.status<400) setValueEachList(response.data)
        }catch (e) {
            console.log(e)
        }
    }

    const handlerButton = async (id: string) =>{
        try {
            const response = await axios.delete(`http://localhost:8080/each-list/${id}`)
            if (response.status<400) getEachList()
        }catch (e){
            console.log(e)
        }
    }

    const handlerCreateButton = async () =>{
        try {
            if (id != null) {
                const response = await axios.post(`http://localhost:8080/each-list`, {
                    name_todo: valueCreate,
                    from_todo: parseInt(id)
                })
                if (response.status<400) getEachList()
            }
        }catch (e) {
            console.log(e)
        }
    }

    const handlerValue = (e:any) => {
        setValueCreate(e.target.value)
    }

    return (
        <div className="w-full h-auto flex items-center flex-col my-[5rem]">
            {valueEachList&&valueEachList.map((item:any, idx:number)=>{
                return (
                    <div className="flex items-center">
                        <input key={id} type="checkbox" value={item.check} className="w-[1rem] mx-1" onChange={async (event) => {
                            try {
                                console.log(`masuk ${item.check}`)
                                const response = await axios.patch(`http://localhost:8080/each-list/${item.id}`,{
                                    name_todo: item.name_todo,
                                    check: !item.check,
                                })
                                if (response.status<400) {
                                    console.log(item.check)
                                    getEachList()
                                }
                            }catch (e) {
                                console.log(e)
                            }
                        }}/>
                        <div className="font-normal mx-1">{item.name_todo}</div>
                        <button className="h-[2.4rem] w-[5rem]
                                font-semibold bg-purple-500 mx-1
                                p-2 text-white rounded-lg mb-3
                                "
                                onClick={()=>{handlerButton(item.id)}}
                        >
                            DELETE
                        </button>
                    </div>
                )
            })}
            <CreateNewTodo value={valueCreate} handlerValue={handlerValue} handlerButton={handlerCreateButton}/>
        </div>
    )
}