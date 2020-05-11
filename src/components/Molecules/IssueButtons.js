import React from 'react';
import Button from '../Atoms/Button';
import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
`;

function IssueButtons(props) {
  return (
    <Layout>
      <Button ButtonName={'New'} type={'primary'} />
      <Button ButtonName={'Delete'} type={'danger'} />
    </Layout>
  );
}

export default IssueButtons;
