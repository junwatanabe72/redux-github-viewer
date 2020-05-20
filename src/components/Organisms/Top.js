import React, { useState } from 'react';
import ContentChange from '../Molecules/Top/ContentChange';
import PullRequest from './Pullrequest';

import Issue from '../../Container/IssueContainer';
import styled from 'styled-components';

const Container = styled.div`
  padding: 16px;
`;

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
