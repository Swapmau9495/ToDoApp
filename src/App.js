import React from 'react'; // Import React
import { Container, Row, Col } from 'react-bootstrap'; // Import necessary components from react-bootstrap
import Sidebar from './component/Sidebar'; // Import Sidebar component
import TaskInput from './component/TaskInput'; // Import TaskInput component
import TaskList from './component/TaskList'; // Import TaskList component
import './App.css'; // Import CSS for App
import { useTheme } from './ThemeContext'; // Import the ThemeContext

// App component definition
const App = () => {
  const { darkMode } = useTheme(); // Use theme context to get dark mode state

  return (
    <Container fluid className={darkMode ? 'dark-mode' : ''}> {/* Apply dark mode class conditionally */}
      <Row>
        <Col md={3}> {/* Sidebar column */}
          <Sidebar />
        </Col>
        <Col md={9}> {/* Main content column */}
          <div className={darkMode ? 'input-dark-mode' : 'main-content'}> {/* Apply dark mode class conditionally */}
            <Row>
              <Col md={12}>
                <TaskInput /> {/* Render TaskInput component */}
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <TaskList /> {/* Render TaskList component */}
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App; // Export the App component
