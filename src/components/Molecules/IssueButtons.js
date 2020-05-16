import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import Button from '../Atoms/Button';
import styled from 'styled-components';
import ModalMain from '../Molecules/ModalMain';
import { modalPush, modalPop } from '../../reducers/Modal';
import { removeIssue } from '../../reducers/Issue';

const Container = styled.div`
  display: flex;
`;

const mapStateToProps = (state) => {
  return {};
};

function mapDispatchToProps(dispatch) {
  return {
    modalPush: (e) => dispatch(modalPush(e)),
    modalPop: (e) => dispatch(modalPop(e)),
    deleteIssue: (e) => dispatch(removeIssue(e)),
  };
}

function IssueButtons({ modalPush, modalPop, deleteIssue, checkedObject }) {
  const _modalPush = () => modalPush(<ModalMain modalPop={modalPop} />);
  const _deleteIssue = () => deleteIssue(checkedObject);
  return (
    <Container>
      <Button ButtonName={'New'} type={'primary'} propsFunction={_modalPush} />
      <Button ButtonName={'Delete'} type={'danger'} propsFunction={_deleteIssue} />
    </Container>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(IssueButtons);
