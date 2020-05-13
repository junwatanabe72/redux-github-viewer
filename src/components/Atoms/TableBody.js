import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import TableData from './TableData';
import { removeIssue } from '../../reducers/Issue';

function mapStateToProps(state) {
  return { data: state.IssueR.data };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteIssue: (e) => dispatch(removeIssue(e)),
  };
}

function TableBody({ data, deleteIssue }) {
  const List = Object.values(data);
  return (
    <tbody>
      {List.map((value) => (
        <TableData key={value.id} item={value} propsFunction={deleteIssue} />
      ))}
    </tbody>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(TableBody);
