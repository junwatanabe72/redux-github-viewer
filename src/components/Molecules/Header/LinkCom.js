import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const List = styled.li`
  padding: 8px 24px;
  margin: 8px 0px;
  &:hover {
    background-color: blue;
    color: white;
  }
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.color};
`;

function LinkButton({ to, color, value }) {
  return (
    <List>
      <StyledLink to={to} color={color}>
        {value}
      </StyledLink>
    </List>
  );
}

export default LinkButton;
