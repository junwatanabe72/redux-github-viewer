import React from 'react';
import IssueDelButton from './IssueDelButton';
import IssueNewButton from './IssueNewButton';
import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
`;

function IssueButtons(props) {
  return (
    <Layout>
      <IssueNewButton />
      <IssueDelButton />
    </Layout>
  );
}

export default IssueButtons;
