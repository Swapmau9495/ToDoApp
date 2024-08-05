// src/redux/reducer.js
import { loadTasks, saveTasks } from '../localStorage';

const initialState = {
  tasks: loadTasks(), // Load tasks from local storage on initialization
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      const newTask = { id: Date.now(), text: action.payload, completed: false, important: false };
      const tasksAfterAdd = [...state.tasks, newTask];
      saveTasks(tasksAfterAdd); // Save tasks to local storage
      return {
        ...state,
        tasks: tasksAfterAdd,
      };
    case 'DELETE_TASK':
      const tasksAfterDelete = state.tasks.filter(task => task.id !== action.payload);
      saveTasks(tasksAfterDelete); // Save tasks to local storage
      return {
        ...state,
        tasks: tasksAfterDelete,
      };
    case 'TOGGLE_TASK_COMPLETE':
      const tasksAfterToggle = state.tasks.map(task =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
      saveTasks(tasksAfterToggle); // Save tasks to local storage
      return {
        ...state,
        tasks: tasksAfterToggle,
      };
    case 'EDIT_TASK':
      const tasksAfterEdit = state.tasks.map(task =>
        task.id === action.payload.id ? { ...task, text: action.payload.updatedText } : task
      );
      saveTasks(tasksAfterEdit); // Save tasks to local storage
      return {
        ...state,
        tasks: tasksAfterEdit,
      };
    case 'MARK_TASK_IMPORTANT':
      const tasksAfterMarkImportant = state.tasks.map(task =>
        task.id === action.payload ? { ...task, important: !task.important } : task
      );
      saveTasks(tasksAfterMarkImportant); // Save tasks to local storage
      return {
        ...state,
        tasks: tasksAfterMarkImportant,
      };
    default:
      return state;
  }
};

export default taskReducer;
