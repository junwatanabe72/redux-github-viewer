import React, { useState } from 'react';
// import { connect } from 'react-redux';
//styled-components
import Modal from 'react-modal';
import styled from 'styled-components';

Modal.setAppElement('#root');

function ModalWindow(props) {
  // const [modalIsOpen, setModal] = useState(false);

  return (
    <div>
      <Modal isOpen={props.modalIsOpen} modalPop={props.modalPop}>
        <div onClick={props.modalPop}>sample</div>
        <ModalMain />
      </Modal>
    </div>
  );
}

export default ModalWindow;

// export default connect(mapStateToProps)(ModalWindow);
