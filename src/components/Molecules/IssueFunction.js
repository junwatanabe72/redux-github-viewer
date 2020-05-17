import React from 'react';
import Logo from '../Atoms/Logo';
import IssueButtons from './IssueButtons';
import Input from '../Atoms/Input';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

function IssueFunction({
  checkedObject,
  propsFunction,
  checkedAll,
  createIssue,
  deleteIssue,
  data,
  modalPush,
  modalPop,
}) {
  return (
    <Container>
      <Logo name={'Issue'} />
      <Input PlaceHolder={'issue名で検索'} propsFunction={propsFunction} />
      <IssueButtons
        checkedObject={checkedObject}
        checkedAll={checkedAll}
        createIssue={createIssue}
        deleteIssue={deleteIssue}
        data={data}
        modalPush={modalPush}
        modalPop={modalPop}
      />
    </Container>
  );
}

export default IssueFunction;
