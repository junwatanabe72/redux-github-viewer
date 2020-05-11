import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import TableHead from '../Atoms/TableHead';
import TableData from '../Atoms/TableData';

const StyledTable = styled.table`
  min-width: 240px;
  margin: 10px 0px 50px;
  border-collapse: collapse;
  border-top: solid 1px #ccc;
`;

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
          <TableData key={value.id} item={value} />
        ))}
      </tbody>
    </StyledTable>
  );
}

export default connect(mapStateToProps)(Table);
