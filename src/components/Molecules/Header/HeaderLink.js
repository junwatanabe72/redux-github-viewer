import React from 'react';
import LinkButton from '../../Atoms/LinkButton';

import styled from 'styled-components';

const Container = styled.ul`
  display: flex;
`;
const StyledList = styled.li`
  margin: 8px;
`;

function HeaderLink() {
  return (
    <Container>
      <StyledList>
        <LinkButton to={'Issue'} value={'Issue'} />
      </StyledList>
      <StyledList>
        <LinkButton to={'PullRequest'} value={'Pull Request'} />
      </StyledList>
    </Container>
  );
}

export default HeaderLink;
