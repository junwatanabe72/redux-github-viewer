import React, { useState } from 'react';
import styled from 'styled-components';

import IssueFunction from '../Molecules/IssueFunction';
import IssueMain from '../Molecules/IssueMain';

//style
const Container = styled.div`
  margin-top: 16px;
  padding: 16px;
`;

function Issue(props) {
  return (
    <Container>
      <IssueFunction />
      <IssueMain />
    </Container>
  );
}

export default Issue;
