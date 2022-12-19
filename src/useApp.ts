import { useEffect, useState } from "react";
import IResponse from "./Models/IResponse";
import ITodo from "./Models/ITodo";
import TodoService from "./Services/TodoService";

export default function useApp(){

    const [todoList, updateTodoList] = useState<ITodo[]>([]);

    useEffect(()=>{
        TodoService.GetAll()
        .then((response: IResponse)=>{
            updateTodoList(response.data);
            console.table(response.data);
        });
    },[])

    return [todoList, updateTodoList];
}