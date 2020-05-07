import React from 'react';
import LinkButton from '../LinkCom/LinkCom';

import styled from 'styled-components';

const Layout = styled.ul`
  display: flex;
`;

function HeaderLink(props) {
  return (
    <Layout>
      <LinkButton to={'Issue'} value={'Issue'} />
      <LinkButton to={'PullRequest'} value={'Pull Request'} />
    </Layout>
  );
}

export default HeaderLink;
