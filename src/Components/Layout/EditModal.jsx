import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';

export default function EditModal({ show, textModal, setTextModal, handleClose, saveItem }) {
return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form.Control
        type="text"
        value={textModal}
        onChange={(e)=>setTextModal(e.currentTarget.value)}
      />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={()=>{saveItem();}}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
