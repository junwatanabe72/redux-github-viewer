import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const StyledTd = styled.td`
  min-width: 150px;
  border-top: solid 1px #ccc;
  text-align: center;
`;

function TableDataCell(props) {
  return <StyledTd>{props.value}</StyledTd>;
}

export default TableDataCell;
