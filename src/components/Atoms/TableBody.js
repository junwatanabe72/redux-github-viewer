import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import TableData from './TableData';

function mapStateToProps(state) {
  return { data: state.IssueR.data };
}

function TableBody({ data, propsFunction, serachWord }) {
  const List = Object.values(data).filter((value) => value.title.includes(serachWord));
  return (
    <tbody>
      {List.map((value) => (
        <TableData key={value.id} value={value} propsFunction={propsFunction} />
      ))}
    </tbody>
  );
}

export default connect(mapStateToProps)(TableBody);
