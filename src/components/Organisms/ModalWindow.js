import React, { useState } from 'react';
//styled-components
import Modal from 'react-modal';
import styled from 'styled-components';
import ModalMain from '../Molecules/ModalMain';

Modal.setAppElement('#root');

function ModalWindow({ show, modalPop, component }) {
  return <Modal isOpen={show}>{component}</Modal>;
}

export default ModalWindow;
