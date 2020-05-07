import React, { useState } from 'react';
import IssueTitle from './IssueTitle';
import IssueButtons from './IssueButtons';
import IssueSearch from './IssueSearch';

import styled from 'styled-components';

const IssueFunctionLayoutElement = styled.div`
  display: flex;
  align-items: center;
`;

function IssueFunction() {
  return (
    <IssueFunctionLayoutElement>
      <IssueTitle />
      <IssueSearch />
      <IssueButtons />
    </IssueFunctionLayoutElement>
  );
}

export default IssueFunction;
