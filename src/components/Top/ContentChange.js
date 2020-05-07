import React from 'react';
import styled from 'styled-components';

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

function ContentChange(props) {
  return (
    <ButtonList>
      <IssueButton>Issue</IssueButton>
      <PulreqButton>Pull Request</PulreqButton>
    </ButtonList>
  );
}

export default ContentChange;
