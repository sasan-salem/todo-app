import { useState } from "react";

export default function TodoForm({ todoList, updateTodoList }) {
  const [text, setText] = useState("");

   function addToList(text) {
        updateTodoList([...todoList, { id: todoList.length + 1, title: text }]); 
    }

  return (
    <div className="input-group mb-3">
      <input
        className="form-control"
        value={text}
        type="text"
        onChange={(e) => setText(e.currentTarget.value)}
      />
      <button
        className="btn btn-outline-secondary"
        type="button"
        onClick={() => {addToList(text)}}
      >
        Insert
      </button>
    </div>
  );
}
