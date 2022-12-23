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
    title: "Task 1",
    description: "Barrer",
    completed: false,
  },
];
export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
});

export default taskSlice.reducers;
