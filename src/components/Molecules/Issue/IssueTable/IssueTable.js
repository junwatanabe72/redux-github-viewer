import React, { useState } from 'react';
import styled from 'styled-components';
import TableHead from './TableHead/TableHead';
import TableBody from './TableBody/TableBody';

const StyledTable = styled.table`
  min-width: 240px;
  margin: 10px 0px 50px;
  border-collapse: collapse;
  border: solid 3px #ccc;
  border-radius: 30px;
`;

function IssueTable({
  propsFunction,
  serachWord,
  CheckedOrCanceledAll,
  checkedAll,
  data,
  modalPush,
  modalPop,
  changeIssue,
}) {
  return (
    <StyledTable>
      <TableHead propsFunction={CheckedOrCanceledAll} />
      <TableBody
        propsFunction={propsFunction}
        serachWord={serachWord}
        checkedAll={checkedAll}
        data={data}
        modalPush={modalPush}
        modalPop={modalPop}
        changeIssue={changeIssue}
      />
    </StyledTable>
  );
}

export default IssueTable;
