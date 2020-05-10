import React from 'react';
import styled from 'styled-components';
import LinkButton from '../LinkCom/LinkCom';

const Layout = styled.div`
  display: inline-block;
  font-size: 26px;
  margin: 0 8px;
`;

function HeaderTitle(props) {
  return (
    <Layout>
      <LinkButton to={'/'} value={'Github Viewer'}></LinkButton>
    </Layout>
  );
}

export default HeaderTitle;
