import React, { useState } from 'react';
import ContentChange from './ContentChange';
import PullRequest from '../PullRequest/Pullrequest';
import Issue from '../Issue/Issue';
import styled from 'styled-components';

const TopElement = styled.div``;

function Top(props) {
  const [contentIssue, setContent] = useState(true);

  const changeContent = () => {
    setContent(!contentIssue);
  };

  return (
    <TopElement>
      <ContentChange contentIssue={contentIssue} changeContent={changeContent} />
      {contentIssue ? <Issue /> : <PullRequest />}
    </TopElement>
  );
}

export default Top;
