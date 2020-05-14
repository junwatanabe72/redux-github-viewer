import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import TableDataCell from './TableDataCell';
import TableCheckBoxCell from './TableCheckBoxCell';

function TableData({ value, propsFunction }) {
  return (
    <tr>
      <TableCheckBoxCell value={value} propsFunction={propsFunction} />
      <TableDataCell value={value.title} />
      <TableDataCell value={value.status} />
      <TableDataCell value={value.description} />
      <TableDataCell value={value.createBy} />
      <TableDataCell value={value.update} />
    </tr>
  );
}
export default TableData;

{
  /* <TableCheckBoxCell value={props.value} propsFunction={props.propsFunction} />
  <TableDataCell value={props.value.title} />
  <TableDataCell value={props.value.status} />
  <TableDataCell value={props.value.description} />
  <TableDataCell value={props.value.createBy} />
  <TableDataCell value={props.value.update} />
    </tr > */
}
