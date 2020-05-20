import React from 'react';
import styled from 'styled-components';
import LinkButton from '../../Atoms/LinkButton';

const Container = styled.ul``;

const StyledList = styled.li`
  width: 180px;
  height: 30px;
  margin: 8px 4px;
  }
`;

function HeaderModal() {
  return (
    <Container>
      <StyledList>
        <LinkButton to={'/'} value={'Top'} hovercolor={'white'} hoverbackgroundcolor={'#0066ff'} />
      </StyledList>
      <StyledList>
        <LinkButton
          to={'profile'}
          value={'Your Profile'}
          hovercolor={'white'}
          hoverbackgroundcolor={'#0066ff'}
        />
      </StyledList>
      <StyledList>
        <LinkButton
          to={'Issue'}
          value={'Issue'}
          hovercolor={'white'}
          hoverbackgroundcolor={'#0066ff'}
        />
      </StyledList>
      <StyledList>
        <LinkButton
          to={'PullRequest'}
          value={'Pull Request'}
          hovercolor={'white'}
          hoverbackgroundcolor={'#0066ff'}
        />
      </StyledList>
    </Container>
  );
}

export default HeaderModal;
