import React from 'react';
import styled from 'styled-components';
import Logo from '../Atoms/Logo';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
`;

function PullRequest(props) {
  return (
    <Container>
      <Logo name={'PullRequest'} />
    </Container>
  );
}

export default PullRequest;
