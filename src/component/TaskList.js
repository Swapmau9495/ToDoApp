import React, { useState } from 'react'; // Import React and useState hook
import { useSelector, useDispatch } from 'react-redux'; // Import useSelector and useDispatch hooks from react-redux
import { deleteTask, toggleTaskComplete, markTaskImportant, editTask } from '../redux/actions'; // Import action creators
import { ListGroup, Button, FormCheck } from 'react-bootstrap'; // Import necessary components from react-bootstrap
import { MdEdit } from 'react-icons/md'; // Import the pencil icon
import EditTaskModal from './EditTaskModal'; // Import EditTaskModal component
import './TaskList.css'; // Import CSS for TaskList
import { useTheme } from '../ThemeContext'; // Import the ThemeContext

// TaskList component definition
const TaskList = () => {
  const { darkMode } = useTheme(); // Use theme context
  const tasks = useSelector((state) => state.tasks); // Get tasks from Redux store
  const dispatch = useDispatch(); // Initialize dispatch function

  const [showModal, setShowModal] = useState(false); // State to control the visibility of the edit modal
  const [currentTask, setCurrentTask] = useState(null); // State to hold the current task being edited

  // Filter tasks into incomplete and completed tasks
  const incompleteTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  // Handle edit button click
  const handleEditClick = (task) => {
    setCurrentTask(task);
    setShowModal(true);
  };

  // Handle modal close
  const handleModalClose = () => {
    setShowModal(false);
    setCurrentTask(null);
  };

  // Handle save changes in edit modal
  const handleSave = (id, updatedText) => {
    dispatch(editTask(id, updatedText)); // Dispatch editTask action
  };

  return (
    <div className={` ${darkMode ? 'task-list-dark ' : 'task-list'}`}> {/* Apply dark mode class conditionally */}
      <ListGroup className={` ${darkMode ? 'task-list-dark ' : 'task-list'}`}> {/* Apply dark mode class conditionally */}
        <h5>To Do</h5>
        {incompleteTasks.map((task) => (
          <ListGroup.Item key={task.id} className="d-flex justify-content-between align-items-center">
            <FormCheck
              type="checkbox"
              checked={task.completed}
              onChange={() => dispatch(toggleTaskComplete(task.id))} // Dispatch toggleTaskComplete action
            />
            <span className={task.completed ? 'completed-task' : ''}>{task.text}</span>
            <div>
              <Button variant="light" onClick={() => handleEditClick(task)}>
                <MdEdit /> {/* Use the pencil icon */}
              </Button>
              <Button variant="light" onClick={() => dispatch(markTaskImportant(task.id))}>
                {task.important ? '★' : '☆'} {/* Toggle important state */}
              </Button>
              <Button variant="danger" onClick={() => dispatch(deleteTask(task.id))}>
                Delete
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <ListGroup className="mt-4">
        <h5>Completed Tasks</h5>
        {completedTasks.map((task) => (
          <ListGroup.Item key={task.id} className="d-flex justify-content-between align-items-center">
            <FormCheck
              type="checkbox"
              checked={task.completed}
              onChange={() => dispatch(toggleTaskComplete(task.id))} // Dispatch toggleTaskComplete action
            />
            <span className={task.completed ? 'completed-task' : ''}>{task.text}</span>
            <div>
              <Button variant="light" onClick={() => handleEditClick(task)}>
                <MdEdit /> {/* Use the pencil icon */}
              </Button>
              <Button variant="light" onClick={() => dispatch(markTaskImportant(task.id))}>
                {task.important ? '★' : '☆'} {/* Toggle important state */}
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>

      {/* Edit Task Modal */}
      {currentTask && (
        <EditTaskModal
          show={showModal}
          handleClose={handleModalClose}
          task={currentTask}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default TaskList; // Export the TaskList component
