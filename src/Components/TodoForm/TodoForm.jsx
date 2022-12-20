import { useState } from "react";

export default function TodoForm({ addToList }) {
  const [text, setText] = useState("");

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
