import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import TableDataCell from './TableDataCell';
import TableCheckBoxCell from './TableCheckBoxCell';

function TableData(props) {
  return (
    <tr>
      <TableCheckBoxCell value={props.item} propsFunction={props.propsFunction} />
      <TableDataCell value={props.item.issue} />
      <TableDataCell value={props.item.status} />
      <TableDataCell value={props.item.id} />
      <TableDataCell value={props.item.id} />
      <TableDataCell value={props.item.id} />
    </tr>
  );
}

export default TableData;
