import React from 'react';
import styled from 'styled-components';
import IssueTable from './IssueTable';

const Container = styled.div`
  max-width: 896px;
  overflow-x: auto;
`;

function IssueMain() {
  return (
    <Container>
      <IssueTable />
    </Container>
  );
}

export default IssueMain;
