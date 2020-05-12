import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import IssueTable from './IssueTable';
import { addIssue } from '../../reducers/Issue';

const Container = styled.div`
  max-width: 896px;
  overflow-x: auto;
`;

const mapStateToProps = (state) => {
  return {
    data: state.IssueR.data,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    createIssue: (e) => dispatch(addIssue(e)),
  };
}

function IssueMain({ createIssue }) {
  const [iss, setIssue] = useState('');
  const [sta, setStatus] = useState('');
  const onSubmit = () => {
    const dat = { issue: iss, status: sta };
    if (!dat) {
      return;
    }
    createIssue(dat);
    setIssue('');
    setStatus('');
  };
  const onChangeIssue = (e) => {
    setIssue(e.target.value);
  };
  const onChangeStatus = (e) => {
    setStatus(e.target.value);
  };

  return (
    <Container>
      <input type="text" value={iss} onChange={onChangeIssue} />
      <input type="text" value={sta} onChange={onChangeStatus} />
      <input type="submit" value="Add" onClick={onSubmit} />
      <IssueTable />
    </Container>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(IssueMain);
