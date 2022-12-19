import { useState } from "react";
import ITodo from "../../Models/ITodo";

export default function useTodoForm(
  todoList: ITodo[],
  updateTodoList: Function) {
  const [text, setText] = useState("");

  function addToList(text: string) {
    updateTodoList([...todoList, { id: todoList.length + 1, title: text }]);
  }
  return [text, setText, addToList];
}
