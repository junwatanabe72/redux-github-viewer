import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Layout = styled.div`
  display: inline-block;
  margin: 0 16px 0 auto;
  cursor: pointer;
`;

function HeaderMenu(props) {
  return (
    <Layout onClick={props.openModal}>
      <FontAwesomeIcon icon={['fas', 'bars']} />
    </Layout>
  );
}

export default HeaderMenu;
