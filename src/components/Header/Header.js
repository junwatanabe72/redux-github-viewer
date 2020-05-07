import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

import HeaderTitle from './HeaderTitle';
import HeaderLink from './HeaderLink';
import HeaderMenu from './HeaderMenu';
import HeaderModal from '../Modal/HeaderModal';

//style
const HeaderElement = styled.div`
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
  background-color: #333333;
  color: white;
`;

function Header(props) {
  const [modalIsOpen, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <React.Fragment>
      <HeaderElement>
        <HeaderTitle />
        <HeaderLink />
        <HeaderMenu openModal={openModal} />
      </HeaderElement>
      <Modal isOpen={modalIsOpen} onClick={closeModal}>
        <HeaderModal closeModal={closeModal} />
      </Modal>
    </React.Fragment>
  );
}

export default Header;
