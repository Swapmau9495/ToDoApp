import React, { useState } from 'react'; // Import React and useState hook
import { Modal, Button, Form } from 'react-bootstrap'; // Import necessary components from react-bootstrap

// EditTaskModal component definition
const EditTaskModal = ({ show, handleClose, task, onSave }) => {
  const [editedText, setEditedText] = useState(task.text); // State to hold the edited text of the task

  // Function to handle save button click
  const handleSave = () => {
    onSave(task.id, editedText); // Call onSave function with task id and edited text
    handleClose(); // Close the modal
  };

  return (
    <Modal show={show} onHide={handleClose}> {/* Modal component */}
      <Modal.Header closeButton> {/* Modal header with close button */}
        <Modal.Title>Edit Task</Modal.Title> {/* Modal title */}
      </Modal.Header>
      <Modal.Body> {/* Modal body */}
        <Form.Group> {/* Form group for task text */}
          <Form.Label>Task Text</Form.Label> {/* Label for task text */}
          <Form.Control
            type="text"
            value={editedText} // Controlled input value from state
            onChange={(e) => setEditedText(e.target.value)} // Update state on input change
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer> {/* Modal footer */}
        <Button variant="secondary" onClick={handleClose}> {/* Close button */}
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}> {/* Save changes button */}
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditTaskModal; // Export the EditTaskModal component
