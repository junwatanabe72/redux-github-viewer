import React from 'react';
import styled from 'styled-components';
import TableHead from '../Atoms/TableHead';
import TableBody from '../Atoms/TableBody';

const StyledTable = styled.table`
  min-width: 240px;
  margin: 10px 0px 50px;
  border-collapse: collapse;
  border: solid 1px #ccc;
`;

function IssueTable({ propsFunction, serachWord }) {
  return (
    <StyledTable>
      <TableHead />
      <TableBody propsFunction={propsFunction} serachWord={serachWord} />
    </StyledTable>
  );
}

export default IssueTable;
