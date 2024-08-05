import React from 'react'; // Import React library
import { Pie } from 'react-chartjs-2'; // Import Pie chart from react-chartjs-2
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js'; // Import necessary components from chart.js

// Register the necessary chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const CircleChart = ({ todoCount, completedCount }) => {
  // Data for the Pie chart
  const data = {
    labels: ['To-Do', 'Completed'], // Labels for the chart segments
    datasets: [
      {
        data: [todoCount, completedCount], // Data values for the chart segments
        backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)'], // Background colors for the chart segments
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'], // Border colors for the chart segments
        borderWidth: 1, // Border width for the chart segments
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true, // Make chart responsive to window resizing
    maintainAspectRatio: false, // Allow chart to adjust its aspect ratio
    plugins: {
      legend: {
        position: 'top', // Position the legend at the top
      },
    },
  };

  return (
    // Container for the Pie chart with responsive styling
    <div style={{ width: '100%', height: '100%', maxWidth: '400px', maxHeight: '400px', position: 'relative' }}>
      <Pie data={data} options={options} /> {/* Render the Pie chart with data and options */}
    </div>
  );
};

export default CircleChart; // Export the CircleChart component
