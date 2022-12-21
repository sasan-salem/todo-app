import { useState } from "react";

export default function TodoForm({ addTodo }) {
  const [text, setText] = useState("");

  const handleSubmitToDo = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };
  return (
    <form className="input-group mb-3" onSubmit={handleSubmitToDo}>
      <input
        className="form-control"
        value={text}
        type="text"
        onChange={(e) => setText(e.currentTarget.value)}
      />
      <button className="btn btn-outline-secondary" type="submit">
        Insert
      </button>
    </form>
  );
}
