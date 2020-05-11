import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  color: ${(props) => props.color};
  &:hover {
    color: ${(props) => props.hoverColor};
  }
`;

function LinkButton(props) {
  return (
    <StyledLink to={props.to} color={props.color} hoverColor={props.hoverColor}>
      {props.value}
    </StyledLink>
  );
}

export default LinkButton;
