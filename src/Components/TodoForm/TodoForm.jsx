import { useContext, useRef } from "react";
import { TodoContext } from "../../Common/Context";
import TodoAction from "../../Common/todoAction";

export default function TodoForm() {
  const dispatch = useContext(TodoContext);
  const txtboxRef = useRef();

  const handleSubmitToDo = (e) => {
    e.preventDefault();
    let text = txtboxRef.current.value;
    dispatch({type: TodoAction.create, payload: text});
    txtboxRef.current.value = "";
  };
  
  return (
    <form className="input-group mb-3" onSubmit={handleSubmitToDo}>
      <input
        className="form-control"
        ref={txtboxRef}
        type="text"
      />
      <button className="btn btn-outline-secondary" type="submit">
        Insert
      </button>
    </form>
  );
}
