import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  display: inline-block;
  width: 100%;
  color: ${(props) => props.color};
  &:hover {
    color: ${(props) => props.hovercolor};
    background-color: ${(props) => props.hoverbackgroundcolor};
  }
`;

function LinkButton({ to, color, hoverbackgroundcolor, hovercolor, value }) {
  return (
    <StyledLink
      to={to}
      color={color}
      hoverbackgroundcolor={hoverbackgroundcolor}
      hovercolor={hovercolor}
    >
      {value}
    </StyledLink>
  );
}

export default LinkButton;
