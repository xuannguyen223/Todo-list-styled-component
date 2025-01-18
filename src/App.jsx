import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ToDoList from "./ExToDoList/ToDoList";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <ToDoList />
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
