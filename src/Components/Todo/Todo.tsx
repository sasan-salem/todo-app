import TodoList from "../../Components/TodoList/TodoList";
import Header from "../../Components/Layout/Header";
import TodoForm from "../../Components/TodoForm/TodoForm";
import useTodo from "./useTodo";
import { TodoContext } from "../../Common/Context";

export default function Todo() {
  const [todos, addTodo, removeTodo, editTodo] = useTodo();

  return (
    <div className="row justify-content-center">
      <div className="col-4">
        <Header />
        <TodoForm addTodo={addTodo} />
        <TodoContext.Provider
          value={{ removeTodo: removeTodo, editTodo: editTodo }}>
          <TodoList todos={todos} />
        </TodoContext.Provider>
      </div>
    </div>
  );
}
