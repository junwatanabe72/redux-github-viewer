import React, { useState } from 'react';
import IssueTitle from './IssueTitle';
import IssueNewButton from './IssueNewButton';
import IssueSearch from './IssueSearch';
import IssueDelButton from './IssueDelButton';
import IssueMain from './IssueMain';

import styled from 'styled-components';

const IssueFunctionLayoutElement = styled.div`
  display: flex;
  justify-content: space-between;
`;

const newButton = styled.div`
  display: flex;
  justify-content: space-between;
`;

function IssueFunction() {
  return (
    <IssueFunctionLayoutElement>
      <IssueTitle />
      <IssueSearch />
      <IssueNewButton />
      <IssueDelButton />
    </IssueFunctionLayoutElement>
  );
}

export default IssueFunction;
