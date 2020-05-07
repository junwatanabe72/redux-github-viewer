import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//style
const HeaderLink = styled.div`
  display: flex;
  align-items: center;
  color: white;
`;

const HeaderElement = styled.div`
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
  background-color: #333333;
  color: white;
`;

const HeaderTitle = styled.h1`
  display: inline-block;
  font-size: 26px;
  margin: 0 16px;
`;

const HeaderLink_item = styled.div`
  display: inline-block;
  margin: 0 8px;
`;
const HeaderMenu = styled.div`
  display: inline-block;
  margin: 0 16px 0 auto;
  cursor: pointer;
`;

function Header() {
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
        <HeaderTitle>
          <Link to="/">Github Viewer</Link>
        </HeaderTitle>
        <HeaderLink>
          <HeaderLink_item>
            <Link to="issue">Issue</Link>
          </HeaderLink_item>
          <HeaderLink_item>
            <Link to="pullrequest">Pull Request</Link>
          </HeaderLink_item>
        </HeaderLink>
        <HeaderMenu onClick={openModal}>
          <FontAwesomeIcon icon={['fas', 'bars']} />
        </HeaderMenu>
      </HeaderElement>
      <Modal isOpen={modalIsOpen} onClick={closeModal}>
        <h2 onClick={closeModal}>close</h2>
      </Modal>
    </React.Fragment>
  );
}

export default Header;
