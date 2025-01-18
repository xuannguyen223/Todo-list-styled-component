import React, { Fragment } from "react";

import styled from "styled-components";

const Input = styled.input`
  border: 1px solid ${(props) => props.theme.color};
  min-height: 35px;
  height: 35px;
  font-size: 17px;
  display: initial;
  color: ${(props) =>
    props.theme.ToDoListDarkTheme ? "black" : props.theme.color}};
`;

const Label = styled.span`
  color: ${(props) => props.theme.color};
  width: auto;
`;

export const TextField = ({ label, ...props }) => {
  return (
    <span>
      <Label>{label}</Label>
      <br />
      <Input {...props} className="w-1/2" />
    </span>
  );
};
