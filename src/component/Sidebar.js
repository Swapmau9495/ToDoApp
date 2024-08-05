import React from 'react'; // Import React library
import { ListGroup, Image, Button } from 'react-bootstrap'; // Import Bootstrap components
import './Sidebar.css'; // Import custom CSS for Sidebar
import profilePic from './profile.png'; // Import profile picture
import CircleChart from './CircleChart'; // Import CircleChart component
import { useSelector } from 'react-redux'; // Import useSelector hook from react-redux
import { useTheme } from '../ThemeContext'; // Import useTheme hook from custom ThemeContext

const Sidebar = () => {
  // Retrieve the current theme mode and the function to toggle it from the ThemeContext
  const { darkMode, setDarkMode } = useTheme(); 
  
  // Retrieve the list of tasks from the Redux store
  const tasks = useSelector((state) => state.tasks);

  // Calculate the number of tasks that are not completed
  const todoCount = tasks.filter(task => !task.completed).length; 

  // Calculate the number of tasks that are completed
  const completedCount = tasks.filter(task => task.completed).length;

  return (
    // Apply conditional class based on the current theme mode
    <div className={`sidebar ${darkMode ? 'dark' : ''}`}> 
      <div className="profile-section text-center">
        {/* Display profile picture */}
        <Image src={profilePic} roundedCircle className="profile-pic" /> 
        <h5>Hey, ABCD</h5> {/* Display a greeting message */}
      </div>
      <ListGroup variant="flush" className={darkMode ? 'dark' : ''}>
        {/* List of sidebar items */}
        <ListGroup.Item>All Tasks</ListGroup.Item>
        <ListGroup.Item>Today</ListGroup.Item>
       
      </ListGroup>
      <div className="chart-container">
        <div className="circle-chart">
          {/* Display the circle chart with the number of to-do and completed tasks */}
          <CircleChart todoCount={todoCount} completedCount={completedCount} />
        </div>
      </div>
      {/* Button to toggle between dark and light mode */}
      <Button style={{marginTop:'20px'}} onClick={() => setDarkMode(prev => !prev)}>
        Toggle {darkMode ? 'Light' : 'Dark'} Mode
      </Button>
    </div>
  );
};

export default Sidebar; // Export the Sidebar component
