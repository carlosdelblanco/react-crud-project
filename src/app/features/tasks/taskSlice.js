import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Task 1",
    description: "Planchar",
    completed: false,
  },
  {
    id: "2",
    title: "Task 2",
    description: "Barrer",
    completed: false,
  },
];
export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    editTask: (state, action) => {
      const { id, title, description } = action.payload;
      const foundtask = state.find((task) => task.id === id);
      if (foundtask) {
        foundtask.title = title;
        foundtask.description = description;
      }
    },
    deleteTask: (state, action) => {
      const taskFound = state.find((task) => task.id === action.payload);
      if (taskFound) {
        state.splice(state.indexOf(taskFound), 1);
      }
    },
  },
});

export const { addTask, deleteTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;
