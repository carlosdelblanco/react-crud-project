import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../app/features/tasks/taskSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});
