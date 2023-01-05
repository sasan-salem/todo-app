import TodoList from "../../Components/TodoList/TodoList";
import TodoForm from "../../Components/TodoForm/TodoForm";
import useTodo from "./useTodo";
import { TodoContext } from "../../Common/Context";
import ErrorMessage from "../Layout/ErrorMessage";

export default function Todo() {
  const [dispatch, todos, errorMessage] = useTodo();
  return (
    <div className="row justify-content-center">
      <div className="col-4">
        <TodoContext.Provider value={dispatch}>
          <TodoForm />
          <ErrorMessage errorMessage={errorMessage} />
          <TodoList todos={todos} />
        </TodoContext.Provider>
      </div>
    </div>
  );
}
