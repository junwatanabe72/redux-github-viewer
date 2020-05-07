import React, { useState } from 'react';
import styled from 'styled-components';

import IssueFunction from './IssueFunction';
import IssueMain from './IssueMain';

//style
const IssueLayout = styled.div`
  margin-top: 16px;
  padding: 16px;
`;

function Issue(props) {
  const [contentIsPull, setcontent] = useState(false);
  const [newModalIsOpen, setNewModal] = useState(false);
  const [issueModalIsOpen, setIssueModal] = useState(false);

  return (
    <IssueLayout>
      <IssueFunction />
      <IssueMain />
    </IssueLayout>
  );
}

export default Issue;
