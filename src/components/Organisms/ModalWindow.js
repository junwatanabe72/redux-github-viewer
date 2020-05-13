import React from 'react';
//styled-components
import Modal from 'react-modal';
import styled from 'styled-components';
import ModalMain from '../Molecules/ModalMain';
Modal.setAppElement('#root');

function ModalWindow(props) {
  return (
    <div>
      <Modal isOpen={props.modalIsOpen} modalPop={props.modalPop}>
        <ModalMain modalPop={props.modalPop} />
      </Modal>
    </div>
  );
}

export default ModalWindow;
