import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  display: inline-block;
  width: 100%;
  color: ${(props) => props.color};
  &:hover {
    color: ${(props) => props.hoverColor};
    background-color: ${(props) => props.hoverBcolor};
  }
`;

function LinkButton({ to, color, hoverBcolor, hoverColor, value }) {
  return (
    <StyledLink to={to} color={color} hoverBcolor={hoverBcolor} hoverColor={hoverColor}>
      {value}
    </StyledLink>
  );
}

export default LinkButton;

// <StyledLink to={props.to} color={props.color} hovercolor={props.hovercolor}>
//   {props.value}
// </StyledLink>
