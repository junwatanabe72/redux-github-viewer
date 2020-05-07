import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';

import IssueFunction from './IssueFunction';
import IssueMain from './IssueMain';

//style
const IssueLayout = styled.div`
  padding: 16px;
`;

function Issue() {
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
