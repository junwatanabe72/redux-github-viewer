import React from 'react';
import styled from 'styled-components';

const StyledTh = styled.th`
  font-size: 14px;
  min-width: 140px;
  border-bottom: solid 1px #ccc;
  border-right: solid 1px white;
`;

function TableHeadCell(props) {
  return <StyledTh>{props.value}</StyledTh>;
}

export default TableHeadCell;
