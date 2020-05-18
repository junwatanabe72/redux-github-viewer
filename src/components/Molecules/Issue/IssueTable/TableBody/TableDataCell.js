import React from 'react';

import styled from 'styled-components';

const StyledTd = styled.td`
  min-width: 150px;
  border-top: solid 1px #ccc;
  text-align: center;
`;

function TableDataCell({ propsFunction, value }) {
  return <StyledTd onClick={propsFunction}>{value}</StyledTd>;
}

export default TableDataCell;
