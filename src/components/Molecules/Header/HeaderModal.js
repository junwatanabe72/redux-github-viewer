import React from 'react';
import styled from 'styled-components';

import LinkButton from '../../Atoms/LinkButton';

const Container = styled.ul`
  // display: inline-block;
`;

const StyledList = styled.li`
  padding: 4px 16px;
  margin: 8px;
  &:hover {
    background-color: blue;
    color: white;
  }
`;

function HeaderModal(props) {
  return (
    <Container>
      <StyledList>
        <LinkButton
          to={'/'}
          value={'Top'}
          color={'black'}
          hoverColor={'white'}
          closeModal={props.closeModal}
        />
      </StyledList>
      <StyledList>
        <LinkButton
          to={'profile'}
          value={'Your Profile'}
          color={'black'}
          closeModal={props.closeModal}
        />
      </StyledList>
      <StyledList>
        <LinkButton to={'Issue'} value={'Issue'} color={'black'} closeModal={props.closeModal} />
      </StyledList>
      <StyledList>
        <LinkButton
          to={'PullRequest'}
          value={'Pull Request'}
          color={'black'}
          closeModal={props.closeModal}
        />
      </StyledList>
    </Container>
  );
}

export default HeaderModal;
