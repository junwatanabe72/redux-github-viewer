import React, { useState } from 'react';
//styled-components
import Modal from 'react-modal';
import styled from 'styled-components';
import ModalMain from '../Molecules/ModalMain';

Modal.setAppElement('#root');

function ModalWindow({ show, modalPop }) {
  return (
    <Modal isOpen={show}>
      <ModalMain modalPop={modalPop} />
    </Modal>
  );
}

export default ModalWindow;
