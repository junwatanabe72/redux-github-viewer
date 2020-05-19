import React from 'react';
import styled from 'styled-components';

const StyledTh = styled.th`
  min-width: 140px;
`;

function TableHeadCell(props) {
  return <StyledTh>{props.value}</StyledTh>;
}

export default TableHeadCell;
