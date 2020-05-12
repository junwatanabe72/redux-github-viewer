import React from 'react';
import styled from 'styled-components';

const StyledTh = styled.th`
  min-width: 150px;
  text-align: center;
`;

function TableHeadCell(props) {
  return <StyledTh>{props.value}</StyledTh>;
}

export default TableHeadCell;
