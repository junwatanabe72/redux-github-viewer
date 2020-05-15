import React from 'react';
import styled from 'styled-components';

const DefaultButton = styled.a`
  cursor: pointer;
  display: inline-block;
  text-align: center;
  color: black;
  padding: 4px 16px;
  margin: 4px;
  border-radius: 6px;
  ${(props) => getButtonBcolor(props)}
`;

const getButtonBcolor = (props) => {
  if (props.type === 'primary') {
    return `
      background-color: rgb(66, 195, 96);
      border-bottom: 2px solid rgb(40, 167, 69);
  `;
  } else if (props.type === 'danger') {
    return `
      background-color: rgb(215, 58, 73);
      border-bottom: 2px solid rgb(175, 28, 42);
  `;
  }
};

function Button({ type, propsFunction, ButtonName }) {
  return (
    <DefaultButton type={type} onClick={propsFunction}>
      {ButtonName}
    </DefaultButton>
  );
}

export default Button;
