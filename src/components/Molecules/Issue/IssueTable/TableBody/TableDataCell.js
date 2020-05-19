import React from 'react';

import styled from 'styled-components';

const StyledTd = styled.td``;

function TableDataCell({ propsFunction, value }) {
  return <StyledTd onClick={propsFunction}>{value}</StyledTd>;
}

export default TableDataCell;
