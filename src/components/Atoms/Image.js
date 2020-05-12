import React from 'react';
import styled from 'styled-components';

const Container = styled.img`
  width: ${(props) => props.width};
`;

function Image(props) {
  return <Container width={props.width} src={props.image} />;
}

export default Image;
