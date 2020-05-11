import React, { useState } from 'react';
import ContentChange from '../Molecules/ContentChange';
import PullRequest from './Pullrequest';
import Issue from './Issue';
import styled from 'styled-components';

const Container = styled.div``;

function Top(props) {
  const [contentIssue, setContent] = useState(true);

  const changeContent = () => {
    setContent(!contentIssue);
  };

  return (
    <Container>
      <ContentChange contentIssue={contentIssue} changeContent={changeContent} />
      {contentIssue ? <Issue /> : <PullRequest />}
    </Container>
  );
}

export default Top;
