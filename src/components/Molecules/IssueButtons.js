import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import Button from '../Atoms/Button';
import styled from 'styled-components';
import ModalWindow from '../Organisms/ModalWindow';
import { modalPush, modalPop } from '../../reducers/Modal';
import { removeIssue } from '../../reducers/Issue';

const Container = styled.div`
  display: flex;
`;

const mapStateToProps = (state) => {
  return {
    modalIsOpen: state.ModalR.show,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    modalPush: (e) => dispatch(modalPush(e)),
    modalPop: (e) => dispatch(modalPop(e)),
    deleteIssue: (e) => dispatch(removeIssue(e)),
  };
}

function IssueButtons({ modalIsOpen, modalPush, modalPop, deleteIssue, checkedObject }) {
  const _deleteIssue = () => deleteIssue(checkedObject);
  return (
    <React.Fragment>
      <Container>
        <Button ButtonName={'New'} type={'primary'} propsFunction={modalPush} />
        <Button
          ButtonName={'Delete'}
          type={'danger'}
          propsFunction={_deleteIssue}
          needArgFunction={true}
        />
      </Container>
      <ModalWindow modalIsOpen={modalIsOpen} modalPop={modalPop} />
    </React.Fragment>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(IssueButtons);

// export default IssueButtons;
