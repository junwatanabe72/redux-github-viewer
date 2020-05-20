import React from 'react';
import styled from 'styled-components';
import IssueButtons from './IssueButtons';
import Logo from '../../../Atoms/Logo';
import Input from '../../../Atoms/Input';

const Container = styled.div`
  display: flex;
  padding: 16px;
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
      <Logo name={'Issue'} fontsize={'1.5'} />
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
