import { useEffect, useState } from "react";
import IResponse from "../../Models/IResponse";
import ITodo from "../../Models/ITodo";
import TodoService from "../../Services/TodoService";

export default function useTodo(){

    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(()=>{
        TodoService.GetAll()
        .then((response: IResponse)=>{
            setTodos(response.data);
            console.table(response.data);
        });
    },[])

    function addTodo(text: string) {
        setTodos(addItemToTodos(todos, text));
        console.table(todos);
      }

    function removeTodo(id: number){
        setTodos(todos.filter(i => i.id !== id));
        console.log(`${id} was deleted`);
    }

    function editTodo(id: number, title: string){
        todos.filter(i => i.id === id)[0].title=title;
        console.log(`Edited: id: ${id} name: ${title}`);
        
    }

    return [todos, addTodo, removeTodo, editTodo];
}

// Private
const lastId = (list: ITodo[]): number => list[list.length-1].id + 1;
const addItemToTodos = (list: ITodo[], text: string) => [...list, { id: lastId(list), title: text }];