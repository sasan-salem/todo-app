import { useContext, React } from "react";
import { TodoContext } from "../../Common/Context";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import TodoAction from "../../Common/todoAction";

export default function EditModal({ show, setShow, todo, setTodo }) {
  const dispatch = useContext(TodoContext);

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Edit</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control
          type="text"
          value={todo.title}
          onChange={(e) =>
            setTodo({ id: todo.id, title: e.currentTarget.value })
          }
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            dispatch({type: TodoAction.edit, payload: todo});
            setShow(false);
          }}
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
