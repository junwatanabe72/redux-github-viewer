import React from 'react';
import styled from 'styled-components';
import HeaderModal from '../Modal/HeaderModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Layout = styled.div`
  display: inline-block;
  margin: 0 16px 0 auto;
  cursor: pointer;
`;
const PositionAbsolute = styled.div`
  position: absolute;
  margin-top: 16px;
  top: 40px;
  right: 16px;
  border-radius: 2px;
  background-color: white;
  box-shadow: rgba(51, 51, 51, 0.15) 1px 1px 4px 1px;
  display: ${(props) => (props.modalIsOpen ? '' : 'none')};
`;

function HeaderMenu(props) {
  return (
    <Layout onClick={props.openModal}>
      <FontAwesomeIcon icon={['fas', 'bars']} />
      <PositionAbsolute modalIsOpen={props.modalIsOpen}>
        <HeaderModal />
      </PositionAbsolute>
    </Layout>
  );
}

export default HeaderMenu;
