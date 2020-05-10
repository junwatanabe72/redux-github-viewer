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

function LinkButton(props) {
  return (
    <List>
      <StyledLink to={props.to} color={props.color}>
        {props.value}
      </StyledLink>
    </List>
  );
}

export default LinkButton;
