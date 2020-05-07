import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import Top from './Top/Top';
import Profile from './Profile/Profile';
import PullRequest from './PullRequest/Pullrequest';
import Issue from './Issue/Issue';

const LBody = styled.div`
  max-width: 896px;
  margin: 0 auto;
  padding: 32px 16px;
`;

function Body(props) {
  return (
    <LBody>
      <Route exact path="/" component={Top}></Route>
      <Route path="/issue" component={Issue}></Route>
      <Route path="/profile" component={Profile}></Route>
      <Route path="/pullrequest" component={PullRequest}></Route>
    </LBody>
  );
}

export default Body;
