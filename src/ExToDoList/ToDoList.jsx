import React from "react";
import { ThemeProvider } from "styled-components";
import { ToDoListPrimaryTheme } from "../Themes/ToDoListPrimaryTheme";
import { Container } from "../Components/Container";
import { Dropdown } from "../Components/Dropdown";
import { ToDoListDarkTheme } from "../Themes/ToDoListDarkTheme";
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

const ToDoList = () => {
  return (
    <>
      <ThemeProvider theme={ToDoListDarkTheme}>
        <Container className="w-1/2">
          <Dropdown>
            <option>Dark Theme</option>
            <option>Light Theme</option>
            <option>Primary Theme</option>
          </Dropdown>
          <Heading3 className="py-5">To Do List</Heading3>
          <TextField label={"Task Name"} />
          <Button className="ml-2">
            <FaPlus className="inline-block -mt-1" /> Add Task
          </Button>
          <Button className="ml-2">
            <FaUpload className="inline-block -mt-1" /> Update Task
          </Button>
          <hr className="my-5" />
          <Heading3 className="mb-3">Task To Do</Heading3>
          <Table>
            <Thead>
              <Tr>
                <Th className="text-left">Task Name</Th>
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
              <Tr>
                <Th className="text-left">Task Name</Th>
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
            </Thead>
          </Table>
          <Heading3 className="my-3">Task Completed</Heading3>
          <Table>
            <Thead>
              <Tr>
                <Th className="text-left">Task Name</Th>
                <Th className="text-right">
                  <Button>
                    <IoTrashSharp />
                  </Button>
                </Th>
              </Tr>
              <Tr>
                <Th className="text-left">Task Name</Th>
                <Th className="text-right">
                  <Button>
                    <IoTrashSharp />
                  </Button>
                </Th>
              </Tr>
            </Thead>
          </Table>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default ToDoList;
