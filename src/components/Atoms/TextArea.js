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
const InputTextarea = styled.textarea`
  width: 98%;
  border-width: inital;
  border-style: none;
  outline: none;
  background: none;
`;

function TextArea(props) {
  return (
    <Container>
      <Frame>
        <InputTextarea
          placeholder={props.PlaceHolder}
          value={props.value}
          onChange={props.propsFunction}
        />
      </Frame>
    </Container>
  );
}

export default TextArea;
