import React, {useEffect, useState} from "react";
import axios from "axios";
import SearchBar from "../component/SearchBar";
import Todo from "../component/Todo";
import CreateNewTodo from "../component/CreateNewTodo";
import {useNavigate} from "react-router-dom";


export default function MainPage(){
    const urlTodoList = "http://localhost:8080/todo-list"
    const navigate = useNavigate()

    const [todo, setTodo] = useState([])
    const [valueSearchbar, setValueSearchbar] = useState('')
    const [valueCreateTodo, setValueCreateTodo] = useState('')

    const handlerValue = (e:any)=>{
        setValueSearchbar(e.target.value)
    }
    const handlerValueCreateTodo = (e:any) =>{
        setValueCreateTodo(e.target.value)
    }

    const handlerSearchButton = async () =>{
        try {
            const response = await axios.get(`${urlTodoList}/spes/${valueSearchbar}`)
            if (response.status<400) setTodo(response.data)
        }catch (e) {
            console.log(e)
        }
    }

    const handlerCreateButton = async () =>{
        try {
            const response = await axios.post(urlTodoList,{
                name: valueCreateTodo,
            })
            if (response.status<400) {
                getTodo()
                setValueCreateTodo('')
            }
        }catch (e) {
            console.log(e)
        }
    }
    const handlerDeleteTodo = async (id: number)=>{
        try {
            const response = await axios.delete(`${urlTodoList}/${id}`)
            if (response.status<400) getTodo()
        }catch (e) {
            console.log(e)
        }
    }

    const getTodo = async () =>{
        try{
            const respose = await axios.get(urlTodoList)
            if (respose.status<400){
                setTodo(respose.data)
            }
        }catch (e) {
            console.log(e)
        }
    }

    useEffect(()=>{
        getTodo()
    },[])


    return(
        <div className="w-full h-auto flex items-center flex-col my-[5rem]">
            <SearchBar value={valueSearchbar} handlerValue={handlerValue} handlerButton={handlerSearchButton}/>
            <div className="grid grid-cols-4 gap-5 px-9 mt-[3rem] mb-20">
                {todo&&todo.map((item:any)=>{
                    return (
                        <Todo todoName={item.name} createdAt={item.createAt} handlerDelete={()=>{handlerDeleteTodo(item.id)}} handlerTodo={()=>{navigate(`/${item.id}`)}}/>
                    )
                })}
            </div>

            <label>Create new Todo</label>
            <CreateNewTodo value={valueCreateTodo} handlerValue={handlerValueCreateTodo} handlerButton={handlerCreateButton}/>

        </div>
    )
}