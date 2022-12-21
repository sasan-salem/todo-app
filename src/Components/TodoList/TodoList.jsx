import EditModal from "../Layout/EditModal";
import TodoItem from "../TodoItem/TodoItem";
import { useState } from "react";

export default function TodoList({ todos }) {
  const [show, setShow] = useState(false);
  const [todo, setTodo] = useState({ id: 0, title: "" });

  return (
    <>
      <EditModal
        show={show}
        setShow={setShow}
        todo={todo}
        setTodo={setTodo}
      />

      <div className="d-grid gap-3">
        <ul className="list-group">
          {todos.map((item, index) => (
            <TodoItem
              key={index}
              item={item}
              showModal={(todo) => {
                setTodo(todo);
                setShow(true);
              }}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
