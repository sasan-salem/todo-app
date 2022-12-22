import { useEffect, useState } from "react";
import ITodo from "../../Models/ITodo";
import TodoService from "../../Services/TodoService";
import { AxiosError } from "axios";

export default function useTodo() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const getTodos = async () => {
    try {
      setTodos(await TodoService.GetAll());
      setErrorMessage("");
    } catch (e) {
      setErrorMessage((e as AxiosError).message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  function addTodo(text: string) {
    setTodos(addItemToTodos(todos, text));
  }

  function removeTodo(id: number) {
    setTodos(todos.filter((i) => i.id !== id));
    console.log(`${id}  was deleted`);
  }

  function editTodo(todo: ITodo) {
    todos.filter((i) => i.id === todo.id)[0].title = todo.title;
    console.log(`Edited: id: ${todo.id} name: ${todo.title}`);
    console.table(todos);
  }

  return [todos, addTodo, removeTodo, editTodo, errorMessage];
}

// Privates

const lastId = (list: ITodo[]): number => list[list.length - 1].id + 1;

const addItemToTodos = (list: ITodo[], text: string) => [
  ...list,
  { id: lastId(list), title: text },
];
