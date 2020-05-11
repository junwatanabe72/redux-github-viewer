import React from 'react';
import Logo from '../Atoms/Logo';
import IssueButtons from './IssueButtons';
import IssueSearch from '../Atoms/Search';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

function IssueFunction(props) {
  return (
    <Container>
      <Logo name={'Issue'} />
      <IssueSearch />
      <IssueButtons />
    </Container>
  );
}

export default IssueFunction;
