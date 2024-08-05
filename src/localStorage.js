// src/localStorage.js
export const loadTasks = () => {
    try {
      const serializedTasks = localStorage.getItem('tasks');
      return serializedTasks ? JSON.parse(serializedTasks) : [];
    } catch (e) {
      console.error('Error loading tasks from local storage:', e);
      return [];
    }
  };
  
  export const saveTasks = (tasks) => {
    try {
      const serializedTasks = JSON.stringify(tasks);
      localStorage.setItem('tasks', serializedTasks);
    } catch (e) {
      console.error('Error saving tasks to local storage:', e);
    }
  };
  