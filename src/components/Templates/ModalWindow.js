import React, { useState } from 'react';
//styled-components
import Modal from 'react-modal';
import styled from 'styled-components';

Modal.setAppElement('#root');

function ModalWindow({ show, component }) {
  return <Modal isOpen={show}>{component}</Modal>;
}

export default ModalWindow;
