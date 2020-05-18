import React, { useState } from 'react';
import styled from 'styled-components';

const StyledTh = styled.th`
  min-width: 100px;
  border-left: solid 1px #ccc;
  border-bottom: solid 1px #ccc;
  text-align: center;
`;

function TableDataCheckBoxCell({ propsFunction }) {
  return (
    <StyledTh>
      <input type="checkbox" onChange={propsFunction} />
    </StyledTh>
  );
}

export default TableDataCheckBoxCell;
