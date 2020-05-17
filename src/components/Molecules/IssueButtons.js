import React from 'react';
import Button from '../Atoms/Button';
import styled from 'styled-components';
import ModalMain from '../Molecules/ModalMain';
import IssueTable from './IssueTable';

const Container = styled.div`
  display: flex;
`;

function IssueButtons({
  data,
  modalPush,
  modalPop,
  createIssue,
  deleteIssue,
  checkedObject,
  checkedAll,
}) {
  const _modalPush = () => modalPush(<ModalMain createIssue={createIssue} modalPop={modalPop} />);
  const _deleteIssue =
    checkedAll === true ? () => deleteIssue(data) : () => deleteIssue(checkedObject);

  return (
    <Container>
      <Button ButtonName={'New'} type={'primary'} propsFunction={_modalPush} />
      <Button ButtonName={'Delete'} type={'danger'} propsFunction={_deleteIssue} />
    </Container>
  );
}

export default IssueButtons;
