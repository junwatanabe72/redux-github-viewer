import React, { useState } from 'react';
import styled from 'styled-components';

const Button = styled.a`
  cursor: pointer;
  width: 100%;
  display: block;
  text-align: center;
  color: white;
  padding: 4px 16px;
  margin: 4px;
  border-radius: 6px;
  background-color: rgb(215, 58, 73);
  border-bottom: 2px solid rgb(175, 28, 42);
`;

function IssueDelButton() {
  return <Button>delete</Button>;
}

export default IssueDelButton;
