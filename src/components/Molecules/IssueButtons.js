import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import Button from '../Atoms/Button';
import styled from 'styled-components';
import ModalWindow from '../Organisms/Modal';
import { modalPush, modalPop } from '../../reducers/Modal';

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
  };
}

function IssueButtons({ modalIsOpen, modalPush, modalPop }) {
  return (
    <React.Fragment>
      <Container>
        <Button ButtonName={'New'} type={'primary'} openModal={modalPush} />
        <Button ButtonName={'Delete'} type={'danger'} />
      </Container>
      <ModalWindow modalIsOpen={modalIsOpen} modalPop={modalPop} />
    </React.Fragment>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(IssueButtons);

// export default IssueButtons;
