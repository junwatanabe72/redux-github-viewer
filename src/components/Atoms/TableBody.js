import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import TableData from './TableData';

function mapStateToProps(state) {
  return { data: state.IssueR.data };
}

function TableBody({ data, propsFunction }) {
  const List = Object.values(data);
  return (
    <tbody>
      {List.map((value) => (
        <TableData key={value.id} value={value} propsFunction={propsFunction} />
      ))}
    </tbody>
  );
}

export default connect(mapStateToProps)(TableBody);
