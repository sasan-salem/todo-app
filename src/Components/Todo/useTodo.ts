import { useEffect, useState } from "react";
import IResponse from "../../Models/IResponse";
import ITodo from "../../Models/ITodo";
import TodoService from "../../Services/TodoService";

export default function useTodo(){

    const [todoList, updateTodoList] = useState<ITodo[]>([]);

    useEffect(()=>{
        TodoService.GetAll()
        .then((response: IResponse)=>{
            updateTodoList(response.data);
            console.table(response.data);
        });
    },[])

    function addToList(text: string) {

        updateTodoList([...todoList, { id: lastId(todoList), title: text }]);
        console.table(todoList);
      }

    function removeFromList(id: number){
        updateTodoList(todoList.filter(i => i.id !== id));
        console.log(`${id} was deleted`);
        console.table(todoList);
    }

    return [todoList, addToList, removeFromList];
}

let lastId = (list: ITodo[]): number => list[list.length-1].id + 1;