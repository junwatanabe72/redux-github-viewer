import React from 'react';
import styled from 'styled-components';
import LinkButton from '../../Atoms/LinkButton';

const Container = styled.div`
  display: inline-block;
  font-size: 26px;
  margin: 16px;
`;

function HeaderTitle() {
  return (
    <Container>
      <LinkButton to={'/'} color={'white'} value={'Github Viewer'} hovercolor={'none'}></LinkButton>
    </Container>
  );
}

export default HeaderTitle;
