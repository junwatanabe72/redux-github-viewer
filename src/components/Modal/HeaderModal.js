import React from 'react';
import styled from 'styled-components';

import LinkButton from '../LinkCom/LinkCom';

const Layout = styled.ul`
  color: black;
`;

function HeaderModal(props) {
  return (
    <Layout>
      <LinkButton to={'/'} value={'Top'} color={'black'} closeModal={props.closeModal} />
      <LinkButton
        to={'profile'}
        value={'Your Profile'}
        color={'black'}
        closeModal={props.closeModal}
      />
      <LinkButton to={'Issue'} value={'Issue'} color={'black'} closeModal={props.closeModal} />
      <LinkButton
        to={'PullRequest'}
        value={'Pull Request'}
        color={'black'}
        closeModal={props.closeModal}
      />
    </Layout>
  );
}

export default HeaderModal;
