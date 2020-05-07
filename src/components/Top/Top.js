import React from 'react';
import ContentChange from './ContentChange';
import Issue from '../Issue/Issue';
import styled from 'styled-components';

const TopElement = styled.div``;

function Top(props) {
  return (
    <TopElement>
      <ContentChange />
      <Issue />
    </TopElement>
  );
}

export default Top;
