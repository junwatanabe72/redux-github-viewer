import React from 'react';
import styled from 'styled-components';
import IssueTable from './IssueTable';

const Container = styled.div`
  max-width: 896px;
  overflow-x: auto;
`;

function IssueMain({ propsFunction, serachWord }) {
  return (
    <Container>
      <IssueTable propsFunction={propsFunction} serachWord={serachWord} />
    </Container>
  );
}

export default IssueMain;
