import React, { useState } from 'react';
import styled, { withTheme } from 'styled-components';

import HeaderTitle from '../Molecules/Header/HeaderTitle';
import HeaderLink from '../Molecules/Header/HeaderLink';
import HeaderMenu from '../Molecules/Header/HeaderMenu';

//style
const Container = styled.div`
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
  background-color: #333333;
  color: white;
`;

function Header(props) {
  const [modalIsOpen, setModal] = useState(false);

  const workModal = () => {
    setModal(!modalIsOpen);
  };

  return (
    <React.Fragment>
      <Container>
        <HeaderTitle />
        <HeaderLink />
        <HeaderMenu workModal={workModal} modalIsOpen={modalIsOpen} />
      </Container>
    </React.Fragment>
  );
}

export default Header;
