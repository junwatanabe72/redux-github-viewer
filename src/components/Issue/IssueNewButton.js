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
  background-color: rgb(66, 195, 96);
  border-bottom: 2px solid rgb(40, 167, 69);
`;

function IssueNewButton(props) {
  return <Button>New</Button>;
}

export default IssueNewButton;
