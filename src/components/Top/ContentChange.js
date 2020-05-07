import React, { useState } from 'react';
import styled from 'styled-components';

//style
// const ContentChangeElement = styled.div`
//   margin: 16px 8px;
//   justify-content: center;
// `;
const ButtonList = styled.ul`
  display: flex;
`;

const IssueButton = styled.li`
  width: 100%;
  padding: 10px;
  border: solid 1px;
  text-align: center;
`;
const PulreqButton = styled.li`
  width: 100%;
  padding: 10px;
  border: solid 1px;
  text-align: center;
`;

function ContentChange() {
  const [contentIsPull, setcontent] = useState(false);

  return (
    <ButtonList>
      <IssueButton>Issue</IssueButton>
      <PulreqButton>Pull Request</PulreqButton>
    </ButtonList>
  );
}

export default ContentChange;
