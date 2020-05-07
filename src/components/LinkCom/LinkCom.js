import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const List = styled.li`
  margin: 0 8px;
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.color};
`;

function LinkButton(props) {
  return (
    <List>
      <StyledLink to={props.to} color={props.color} onClick={props.closeModal}>
        {props.value}
      </StyledLink>
    </List>
  );
}

export default LinkButton;
