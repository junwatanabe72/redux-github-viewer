import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  padding: 8px 16px;
`;
const Frame = styled.div`
  border-radius: 6px;
  border-width: 1px;
  border: 1px solid #ccc;
`;
const InputBar = styled.input`
  display: table-cell;
  width: 98%;
  padding: 8px;
  border-width: inital;
  border-style: none;
  outline: none;
  background: none;
`;

function Input(props) {
  return (
    <Container>
      <Frame>
        <InputBar
          placeholder={props.PlaceHolder}
          value={props.value}
          onChange={props.propsFunction}
        />
      </Frame>
    </Container>
  );
}

export default Input;
