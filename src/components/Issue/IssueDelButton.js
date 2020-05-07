import React from 'react';
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

<<<<<<< HEAD
function IssueDelButton(props) {
=======
function IssueDelButton() {
>>>>>>> 37d8ff9ebf87e7d2407037e2296f499345804ca0
  return <Button>delete</Button>;
}

export default IssueDelButton;
