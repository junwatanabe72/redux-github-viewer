import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  color: ${(props) => props.color};
  &:hover {
    color: ${(props) => props.hovercolor};
  }
`;

function LinkButton(props) {
  return (
    <StyledLink to={props.to} color={props.color} hovercolor={props.hovercolor}>
      {props.value}
    </StyledLink>
  );
}

export default LinkButton;
