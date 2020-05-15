import React, { useState } from 'react';
//styled-components
import Modal from 'react-modal';
import styled from 'styled-components';
import ModalMain from '../Molecules/ModalMain';
import ModalUpdate from '../Molecules/ModalUpdate';

function ModalWindow({ modalIsOpen, modalPop, value, boo }) {
  const [iss, setIssue] = useState(boo);
  return iss ? (
    <Modal isOpen={modalIsOpen} modalPop={modalPop} Value={value}>
      <ModalMain modalPop={modalPop} Value={value} />
    </Modal>
  ) : (
    <Modal isOpen={modalIsOpen} modalPop={modalPop}>
      <ModalUpdate modalPop={modalPop} />
    </Modal>
  );
}

export default ModalWindow;
