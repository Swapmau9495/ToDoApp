// src/redux/actions.js
import { saveTasks } from '../localStorage'; // Import the saveTasks function

export const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: task,
});

export const deleteTask = (id) => ({
  type: 'DELETE_TASK',
  payload: id,
});

export const toggleTaskComplete = (id) => ({
  type: 'TOGGLE_TASK_COMPLETE',
  payload: id,
});

export const editTask = (id, updatedText) => ({
  type: 'EDIT_TASK',
  payload: { id, updatedText },
});

export const markTaskImportant = (id) => ({
  type: 'MARK_TASK_IMPORTANT',
  payload: id,
});
