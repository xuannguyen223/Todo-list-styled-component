import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Container } from "../Components/Container";
import { Dropdown } from "../Components/Dropdown";
import { ToDoListPrimaryTheme } from "../Themes/ToDoListPrimaryTheme";
import { ToDoListDarkTheme } from "../Themes/ToDoListDarkTheme";
import { ToDoListLightTheme } from "../Themes/ToDoListLightTheme";
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
} from "../Components/Heading";
import { TextField } from "../Components/TextField";
import { Button } from "../Components/Button";
import { FaPlus, FaRegEdit, FaCheck } from "react-icons/fa";
import { FaUpload } from "react-icons/fa6";
import { IoTrashSharp } from "react-icons/io5";
import { Table, Thead, Tr, Th } from "../Components/Table";
import { useDispatch, useSelector } from "react-redux";
import { handleAddTask, handleTheme } from "../Redux/Reducers/ToDoListReducer";

const ToDoList = () => {
  const selectedTheme = useSelector(
    (state) => state.ToDoListReducer.selectedTheme
  );

  const dispatch = useDispatch();

  const arrTask = useSelector((state) => state.ToDoListReducer.taskList);
  console.log("arrTask: ", arrTask);

  const [inputTask, setInputTask] = useState("");
  // console.log("inputTask: ", inputTask);

  return (
    <>
      <ThemeProvider theme={selectedTheme}>
        <Container className="w-1/2">
          <Dropdown
            onChange={(e) => {
              console.log(e.target.value);
              dispatch(handleTheme(e.target.value));
            }}
          >
            <option value={"ToDoListDarkTheme"}>Dark Theme</option>
            <option value={"ToDoListLightTheme"}>Light Theme</option>
            <option value={"ToDoListPrimaryTheme"}>Primary Theme</option>
          </Dropdown>
          <Heading3 className="py-5">To Do List</Heading3>
          <TextField
            label={"Task Name"}
            onChange={(e) => {
              setInputTask(e.target.value);
            }}
          />
          <Button
            className="ml-2"
            onClick={() => {
              console.log("hello");
              const payload = {
                id: Date.now(),
                taskName: inputTask,
                done: false,
              };
              console.log("payload: ", payload);
              dispatch(handleAddTask(payload));
            }}
          >
            <FaPlus className="inline-block -mt-1" /> Add Task
          </Button>
          <Button className="ml-2">
            <FaUpload className="inline-block -mt-1" /> Update Task
          </Button>
          <hr className="my-5" />
          <Heading3 className="mb-3">Task To Do</Heading3>
          <Table>
            <Thead>
              {arrTask
                .filter((task) => !task.done)
                .map((task, index) => {
                  return (
                    <Tr key={index}>
                      <Th className="text-left">{task.taskName}</Th>
                      <Th className="text-right">
                        <Button>
                          <FaRegEdit />
                        </Button>
                        <Button>
                          <FaCheck />
                        </Button>
                        <Button>
                          <IoTrashSharp />
                        </Button>
                      </Th>
                    </Tr>
                  );
                })}
            </Thead>
          </Table>
          <Heading3 className="my-3">Task Completed</Heading3>
          <Table>
            <Thead>
              {arrTask
                .filter((task) => task.done)
                .map((task, index) => {
                  return (
                    <Tr key={index}>
                      <Th className="text-left">{task.taskName}</Th>
                      <Th className="text-right">
                        <Button>
                          <IoTrashSharp />
                        </Button>
                      </Th>
                    </Tr>
                  );
                })}
            </Thead>
          </Table>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default ToDoList;
