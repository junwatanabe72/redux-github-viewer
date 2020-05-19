import React, { useState } from 'react';
import styled from 'styled-components';

const StyledTh = styled.th`
  min-width: 40px;
`;

function TableHeadCheckBoxCell({ propsFunction }) {
  return (
    <StyledTh>
      <input type="checkbox" onChange={propsFunction} />
    </StyledTh>
  );
}

export default TableHeadCheckBoxCell;
