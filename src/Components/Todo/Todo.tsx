import TodoList from "../../Components/TodoList/TodoList";
import TodoForm from "../../Components/TodoForm/TodoForm";
import useTodo from "./useTodo";
import { TodoContext } from "../../Common/Context";
import ErrorMessage from '../Layout/ErrorMessage';

export default function Todo() {
  const [todos, addTodo, removeTodo, editTodo, errorMessage] = useTodo();

  return (
    <div className="row justify-content-center">
      <div className="col-4">
        <TodoForm addTodo={addTodo} />
        <ErrorMessage errorMessage={errorMessage}/>
        <TodoContext.Provider
          value={{ removeTodo: removeTodo, editTodo: editTodo }}>
          <TodoList todos={todos} />
        </TodoContext.Provider>
      </div>
    </div>
  );
}
