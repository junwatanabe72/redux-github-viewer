import React from 'react';
import styled from 'styled-components';

const StyledTh = styled.th`
  min-width: 100px;
  border-left: solid 1px #ccc;
  border-bottom: solid 1px #ccc;
  text-align: center;
`;

function TableCheckBoxCell(props) {
  return (
    <StyledTh>
      <input type="checkbox" />
    </StyledTh>
  );
}

export default TableCheckBoxCell;
