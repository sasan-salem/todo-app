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
    console.log(`${text} added`);
  }

  function removeTodo(id: number) {
    setTodos(todos.filter((i) => i.id !== id));
    console.log(`${id} deleted`);
  }

  function editTodo(todo: ITodo) {
    const updatedTodos = todos.map((item) => {
      if (item.id === todo.id) {
        return { ...item, title: todo.title };
      } else return item;
    });
    setTodos(updatedTodos);
    console.log(`updated to: ${todo.title}`);
  }

  return [todos, addTodo, removeTodo, editTodo, errorMessage];
}

// Privates Functions

const lastId = (list: ITodo[]): number => list.length === 0 ? 1 : list[list.length - 1].id + 1;

const addItemToTodos = (list: ITodo[], text: string): ITodo[] => 
[
  ...list, { id: lastId(list), title: text },
];
