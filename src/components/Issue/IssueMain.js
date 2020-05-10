import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Table from './Table';

const Layout = styled.div`
  max-width: 896px;
  overflow-x: auto;
`;

// function mapStateToProps(state) {
//   return { data: state.data };
// }

// function addIssue(issue) {
//   return { type: 'ADD_ISSUE', payload: issue };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     createIssue: (issue) => dispatch(addIssue(issue)),
//   };
// }

function IssueMain(props) {
  // const [issue, setIssue] = useState('');
  // const onSubmit = () => {
  //   if (!issue) {
  //     return;
  //   }
  //   createIssue(issue);
  //   setIssue('');
  // };
  // const onChangeIssue = (e) => {
  //   setIssue(e.target.value);
  // };

  return (
    <Layout>
      <Table />
    </Layout>
  );
}

export default IssueMain;
