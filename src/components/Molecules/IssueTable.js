import React, { useState } from 'react';
import styled from 'styled-components';
import TableHead from '../Atoms/TableHead';
import TableBody from '../Atoms/TableBody';

const StyledTable = styled.table`
  min-width: 240px;
  margin: 10px 0px 50px;
  border-collapse: collapse;
  border: solid 1px #ccc;
`;

function IssueTable({
  propsFunction,
  serachWord,
  checkedObject,
  CheckedOrCanceledAll,
  checkedAll,
  data,
  modalPush,
  modalPop,
}) {
  // const [checkedAll, setCheckedAll] = useState(false);
  // //checkedAll
  // const CheckedOrCanceledAll = () => {
  //   setCheckedAll(!checkedAll);
  // };
  return (
    <StyledTable>
      <TableHead propsFunction={CheckedOrCanceledAll} />
      <TableBody
        propsFunction={propsFunction}
        serachWord={serachWord}
        checkedObject={checkedObject}
        checkedAll={checkedAll}
        data={data}
        modalPush={modalPush}
        modalPop={modalPop}
      />
    </StyledTable>
  );
}

export default IssueTable;
