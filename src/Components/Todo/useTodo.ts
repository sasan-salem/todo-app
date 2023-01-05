import { useEffect, useReducer, useState } from "react";
import ITodo from "../../Models/ITodo";
import TodoService from "../../Services/TodoService";
import { AxiosError } from "axios";
import TodoAction from "../../Common/todoAction";
import todoReducer from "./todoReducer";
import IAction from "../../Models/IAction";

export default function useTodo(): [React.Dispatch<IAction>, ITodo[], string] {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [todos, dispatch] = useReducer(todoReducer, [])

  const getTodosFromServer = async () => {
    try {
      dispatch({type: TodoAction.init, payload: await TodoService.GetAll()})
      setErrorMessage("");
    } catch (e) {
      setErrorMessage((e as AxiosError).message);
    }
  };

  useEffect(() => {
    getTodosFromServer();
  }, []);

  return [dispatch, todos, errorMessage];
}
