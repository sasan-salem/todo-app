import EditModal from "../Layout/EditModal";
import TodoItem from "../TodoItem/TodoItem";
import { useState } from "react";

export default function TodoList({ todoList, editFromList }) {
  const [show, setShow] = useState(false);
  const [textModal, setTextModal] = useState("");
  const [id, setId] = useState(0);

  return (
    <>
      <EditModal
        show={show}
        textModal={textModal}
        setTextModal={setTextModal}
        handleClose={() => setShow(false)}
        saveItem={() => {
          editFromList(id, textModal);
          setShow(false);
        }}
      />

      <div className="d-grid gap-3">
        <ul className="list-group">
          {todoList.map((item, index) => (
            <TodoItem
              key={index}
              item={item}
              showModal={(id, title) => {
                setId(id);
                setTextModal(title);
                setShow(true);
              }}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
