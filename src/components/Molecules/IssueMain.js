import React from 'react';
import styled from 'styled-components';
import IssueTable from './IssueTable';

const Container = styled.div`
  max-width: 896px;
  overflow-x: auto;
`;

function IssueMain({
  propsFunction,
  serachWord,
  checkedObject,
  CheckedOrCanceledAll,
  checkedAll,
  data,
  modalPush,
  modalPop,
}) {
  return (
    <Container>
      <IssueTable
        propsFunction={propsFunction}
        serachWord={serachWord}
        checkedObject={checkedObject}
        CheckedOrCanceledAll={CheckedOrCanceledAll}
        checkedAll={checkedAll}
        data={data}
        modalPush={modalPush}
        modalPop={modalPop}
      />
    </Container>
  );
}

export default IssueMain;
