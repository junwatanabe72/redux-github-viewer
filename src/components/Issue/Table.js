import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import TableHead from './TableHead';
import TableData from './TableData';

const StyledTable = styled.table`
  min-width: 240px;
  margin: 10px 0px 50px;
  border-collapse: collapse;
  border-top: solid 1px #ccc;
`;

// const Th = styled.Th`
//   border-top: solid 1px #ccc;
//   border-bottom: solid 1px #ccc;
//   text-align: center;
// `;

function mapStateToProps(state) {
  return { data: state.data };
}

function Table({ data }) {
  const list = Object.values(data);
  return (
    <StyledTable>
      <tbody>
        <TableHead />
        {list.map((value) => (
          <TableData issue={value.issue} status={value.status} />
        ))}
      </tbody>
    </StyledTable>
  );
}

export default Table = connect(mapStateToProps)(Table);
