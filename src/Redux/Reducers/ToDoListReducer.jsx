import { createSlice } from "@reduxjs/toolkit";
import { ToDoListDarkTheme } from "../../Themes/ToDoListDarkTheme";
import { ToDoListLightTheme } from "../../Themes/ToDoListLightTheme";
import { ToDoListPrimaryTheme } from "../../Themes/ToDoListPrimaryTheme";

const initialState = {
  selectedTheme: ToDoListDarkTheme,
  taskList: [
    { id: "task-1", taskName: "task 1", done: true },
    { id: "task-2", taskName: "task 2", done: false },
    { id: "task-3", taskName: "task 3", done: true },
    { id: "task-4", taskName: "task 4", done: false },
  ],
};

const chooseThemeByName = (themeName) => {
  switch (themeName) {
    case "ToDoListDarkTheme":
      return ToDoListDarkTheme;
    case "ToDoListLightTheme":
      return ToDoListLightTheme;
    case "ToDoListPrimaryTheme":
      return ToDoListPrimaryTheme;
    default:
      return ToDoListDarkTheme;
  }
};
const ToDoListReducer = createSlice({
  name: "ToDoListReducer",
  initialState,
  reducers: {
    handleTheme(state, action) {
      state.selectedTheme = chooseThemeByName(action.payload);
    },
    handleAddTask(state, action) {
      if (action.payload.taskName.trim() === "") {
        alert("Task name is required !");
      }
      let index = state.taskList.findIndex(
        (task) =>
          task.taskName.toLowerCase() === action.payload.taskName.toLowerCase()
      );
      if (index !== -1) {
        alert("Task name already exits");
      } else {
        state.taskList.push(action.payload);
      }
    },
  },
});

export const { handleTheme, handleAddTask } = ToDoListReducer.actions;

// export default ToDoListReducer;
export default ToDoListReducer.reducer;
