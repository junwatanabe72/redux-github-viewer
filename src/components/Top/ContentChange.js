import React from 'react';
import styled from 'styled-components';

const ButtonList = styled.ul`
  display: flex;
`;

const Button = styled.li`
  width: 100%;
  cursor: pointer;
  padding: 10px;
  text-align: center;
  border-radius: 6px 6px 0 0;
`;

const IssueButton = styled(Button)`
  border-top: ${(props) => (props.contentIssue ? '1px solid rgb(225, 228, 232)' : '')};
  border-right: ${(props) => (props.contentIssue ? '1px solid rgb(225, 228, 232)' : '')};
  border-left: ${(props) => (props.contentIssue ? '1px solid rgb(225, 228, 232)' : '')};
  border-bottom: ${(props) => (props.contentIssue ? '' : '1px solid rgb(225, 228, 232)')};
`;

const PulreqButton = styled(Button)`
  border-top: ${(props) => (!props.contentIssue ? '1px solid rgb(225, 228, 232)' : '')};
  border-right: ${(props) => (!props.contentIssue ? '1px solid rgb(225, 228, 232)' : '')};
  border-left: ${(props) => (!props.contentIssue ? '1px solid rgb(225, 228, 232)' : '')};
  border-bottom: ${(props) => (!props.contentIssue ? '' : '1px solid rgb(225, 228, 232)')};
`;

function ContentChange(props) {
  return (
    <ButtonList>
      {props.contentIssue ? (
        <React.Fragment>
          <IssueButton contentIssue={props.contentIssue}>Issue</IssueButton>
          <PulreqButton contentIssue={props.contentIssue} onClick={props.changeContent}>
            Pull Request
          </PulreqButton>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <IssueButton contentIssue={props.contentIssue} onClick={props.changeContent}>
            Issue
          </IssueButton>
          <PulreqButton contentIssue={props.contentIssue}>Pull Request</PulreqButton>
        </React.Fragment>
      )}
    </ButtonList>
  );
}

export default ContentChange;
