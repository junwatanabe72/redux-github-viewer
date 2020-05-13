import React from 'react';
import styled from 'styled-components';
import IssueTable from './IssueTable';

const Container = styled.div`
  max-width: 896px;
  overflow-x: auto;
`;

function IssueMain({ propsFunction }) {
  return (
    <Container>
      <IssueTable propsFunction={propsFunction} />
    </Container>
  );
}

export default IssueMain;
