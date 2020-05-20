import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import Issue from '../../Container/IssueContainer';
import Profile from '../../Container/ProfileContainer';
import Top from '../Organisms/Top';
import PullRequest from '../Organisms/Pullrequest';

const Container = styled.div`
  max-width: 896px;
  margin: 0 auto;
  padding: 32px 16px;
`;

function Body() {
  return (
    <Container>
      <Route exact path="/" component={Top}></Route>
      <Route path="/issue" component={Issue}></Route>
      <Route path="/profile" component={Profile}></Route>
      <Route path="/pullrequest" component={PullRequest}></Route>
    </Container>
  );
}

export default Body;
