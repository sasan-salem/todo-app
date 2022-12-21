import { useContext } from "react";
import { TodoContext } from "../../Common/Context";
import { IconButton } from "../Elements/IconButton";
import { PencilIcon, TrashIcon } from "../Elements/Icon";

export default function TodoItem({ item, showModal }) {
  const { removeTodo } = useContext(TodoContext);

  return (
    <>
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        {item.title}
        <div className="d-grid gap-2 d-md-flex">
          <IconButton onClick={() => showModal(item)}>
            <PencilIcon />
          </IconButton>
          <IconButton onClick={() => removeTodo(item.id)}>
            <TrashIcon />
          </IconButton>
        </div>
      </li>
    </>
  );
}
