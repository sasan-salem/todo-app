import TodoList from "../../Components/TodoList/TodoList";
import Header from "../../Components/Layout/Header";
import TodoForm from "../../Components/TodoForm/TodoForm";
import useTodo from "./useTodo";

export default function Todo() {
  const [todoList, addToList, removeFromList] = useTodo();

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-4">
          <Header />
          <TodoForm addToList={addToList} />
          <TodoList todoList={todoList} removeFromList={removeFromList} />
        </div>
      </div>
    </>
  );
}
