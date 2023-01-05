import { useContext } from "react";
import { TodoContext } from "../../Common/Context";
import { IconButton } from "../Elements/IconButton";
import { PencilIcon, TrashIcon } from "../Elements/Icon";
import TodoAction from "../../Common/todoAction";

export default function TodoItem({ item, showModal }) {
  const  dispatch = useContext(TodoContext);

  return (
    <>
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center" 
        data-testid={`todoItem-${item.id}`}
      >
        {item.title}
        <div className="d-grid gap-2 d-md-flex">
          <IconButton onClick={() => showModal(item)}>
            <PencilIcon />
          </IconButton>
          <IconButton onClick={() => dispatch({type: TodoAction.remove, payload: item.id})}>
            <TrashIcon />
          </IconButton>
        </div>
      </li>
    </>
  );
}
