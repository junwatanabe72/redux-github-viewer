import React from 'react';
import styled from 'styled-components';

import LinkButton from '../../Atoms/LinkButton';

const Container = styled.ul`
  // display: inline-block;
`;

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
        <LinkButton to={'/'} value={'Top'} hoverColor={'white'} hoverBcolor={'#0066ff'} />
      </StyledList>
      <StyledList>
        <LinkButton
          to={'profile'}
          value={'Your Profile'}
          hoverColor={'white'}
          hoverBcolor={'#0066ff'}
        />
      </StyledList>
      <StyledList>
        <LinkButton to={'Issue'} value={'Issue'} hoverColor={'white'} hoverBcolor={'#0066ff'} />
      </StyledList>
      <StyledList>
        <LinkButton
          to={'PullRequest'}
          value={'Pull Request'}
          hoverColor={'white'}
          hoverBcolor={'#0066ff'}
        />
      </StyledList>
    </Container>
  );
}

export default HeaderModal;
