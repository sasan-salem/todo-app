import { useContext } from "react";
import { TodoContext } from "../../Common/Context";
import { useState } from "react";
import TodoAction from "../../Common/todoAction";

export default function TodoForm() {
  const dispatch = useContext(TodoContext);
  const [text, setText] = useState("");

  const handleSubmitToDo = (e) => {
    e.preventDefault();
    dispatch({type: TodoAction.create, payload: text});
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
