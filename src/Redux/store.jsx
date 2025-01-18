import { configureStore } from "@reduxjs/toolkit";
import ToDoListReducer from "./Reducers/ToDoListReducer";

export const store = configureStore({
  reducer: { ToDoListReducer },
});
