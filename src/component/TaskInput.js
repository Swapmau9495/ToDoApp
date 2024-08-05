import React, { useState } from 'react'; // Import React and useState hook
import { Button, Form, InputGroup } from 'react-bootstrap'; // Import necessary components from react-bootstrap
import { useDispatch } from 'react-redux'; // Import useDispatch hook from react-redux
import { addTask } from '../redux/actions'; // Import addTask action creator
import './TaskInput.css'; // Import CSS for TaskInput

// TaskInput component definition
const TaskInput = () => {
  const [task, setTask] = useState(''); // State to hold the value of the new task
  const dispatch = useDispatch(); // Initialize dispatch function

  // Function to handle adding a new task
  const handleAddTask = () => {
    if (task) { // Check if task input is not empty
      dispatch(addTask(task)); // Dispatch the addTask action with the new task
      setTask(''); // Clear the input field
    }
  };

  return (
    <Form className="task-input"> {/* Form for task input */}
      <InputGroup> {/* Input group for task input and add button */}
        <Form.Control
          type="text"
          value={task} // Controlled input value from state
          onChange={(e) => setTask(e.target.value)} // Update state on input change
          placeholder="Add a Task" // Placeholder text
        />
        <Button variant="success" onClick={handleAddTask}> {/* Button to add task */}
          ADD TASK
        </Button>
      </InputGroup>
    </Form>
  );
};

export default TaskInput; // Export the TaskInput component
