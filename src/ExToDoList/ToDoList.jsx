import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Container } from "../Components/Container";
import { Dropdown } from "../Components/Dropdown";
import { Heading3 } from "../Components/Heading";
import { TextField } from "../Components/TextField";
import { Button } from "../Components/Button";
import { FaPlus, FaRegEdit, FaCheck } from "react-icons/fa";
import { FaUpload } from "react-icons/fa6";
import { IoTrashSharp } from "react-icons/io5";
import { Table, Thead, Tr, Th } from "../Components/Table";
import { useDispatch, useSelector } from "react-redux";
import {
  handleAddTask,
  handleDeletetTask,
  handleDoneTask,
  handleEditTask,
  handleTheme,
  handleUpdateTask,
} from "../Redux/Reducers/ToDoListReducer";

const ToDoList = () => {
  const selectedTheme = useSelector(
    (state) => state.ToDoListReducer.selectedTheme
  );

  const dispatch = useDispatch();

  const arrTask = useSelector((state) => state.ToDoListReducer.taskList);

  const [inputTask, setInputTask] = useState("");

  const taskEdit = useSelector((state) => state.ToDoListReducer.taskEdit);

  return (
    <>
      <ThemeProvider theme={selectedTheme}>
        <Container className="w-1/2">
          <Dropdown
            onChange={(e) => {
              dispatch(handleTheme(e.target.value));
            }}
          >
            <option value={"ToDoListDarkTheme"}>Dark Theme</option>
            <option value={"ToDoListLightTheme"}>Light Theme</option>
            <option value={"ToDoListPrimaryTheme"}>Primary Theme</option>
          </Dropdown>
          <Heading3 className="py-5">To Do List</Heading3>
          <TextField
            key={taskEdit?.id}
            label={"Task Name"}
            onChange={(e) => {
              setInputTask(e.target.value);
            }}
            defaultValue={taskEdit?.taskName}
          />
          <Button
            className="ml-2"
            onClick={() => {
              if (taskEdit) {
                alert(
                  "You are editing an existing task. Please choose 'Update Task' !"
                );
                return;
              }
              const payload = {
                id: Date.now(),
                taskName: inputTask,
                done: false,
              };
              dispatch(handleAddTask(payload));
            }}
          >
            <FaPlus className="inline-block -mt-1" /> Add Task
          </Button>
          <Button
            className="ml-2"
            onClick={() => {
              const payload = {
                ...taskEdit,
                taskName: inputTask,
              };
              dispatch(handleUpdateTask(payload));
              dispatch(handleEditTask());
            }}
          >
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
                        <Button
                          onClick={() => {
                            dispatch(handleEditTask(task));
                          }}
                        >
                          <FaRegEdit />
                        </Button>
                        <Button
                          onClick={() => {
                            dispatch(handleDoneTask(task.taskName));
                          }}
                        >
                          <FaCheck />
                        </Button>
                        <Button
                          onClick={() => {
                            dispatch(handleDeletetTask(task.taskName));
                          }}
                        >
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
                        <Button
                          onClick={() => {
                            dispatch(handleDeletetTask(task.taskName));
                          }}
                        >
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
