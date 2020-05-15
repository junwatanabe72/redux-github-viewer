import React, { useState } from 'react';
import styled from 'styled-components';

import IssueFunction from '../Molecules/IssueFunction';
import IssueMain from '../Molecules/IssueMain';

//style
const Container = styled.div`
  margin-top: 16px;
  padding: 16px;
`;

function Issue() {
  const [checkedObject, setChecked] = useState({});
  const [serachWord, setWord] = useState('');

  //checkedObject
  const CheckedOrCanceled = (e, b) => {
    if (!b) {
      const newState = { ...checkedObject };
      newState[e.id] = e;
      setChecked(newState);
    } else {
      const newState = { ...checkedObject };
      delete newState[e.id];
      setChecked(newState);
    }
  };
  //checkedObject
  const InputWord = (e) => {
    setWord(e.target.value);
  };

  return (
    <Container>
      <IssueFunction checkedObject={checkedObject} propsFunction={InputWord} />
      <IssueMain propsFunction={CheckedOrCanceled} serachWord={serachWord} />
    </Container>
  );
}

export default Issue;
