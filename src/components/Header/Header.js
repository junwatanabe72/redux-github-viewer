import React, { useState } from 'react';
import styled, { withTheme } from 'styled-components';

import HeaderTitle from './HeaderTitle';
import HeaderLink from './HeaderLink';
import HeaderMenu from './HeaderMenu';

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
    setModal(!modalIsOpen);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <React.Fragment>
      <HeaderElement>
        <HeaderTitle />
        <HeaderLink />
        <HeaderMenu openModal={openModal} modalIsOpen={modalIsOpen} />
      </HeaderElement>
    </React.Fragment>
  );
}

export default Header;
