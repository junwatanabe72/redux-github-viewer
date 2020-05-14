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

  return (
    <Container>
      <div
        onClick={() => {
          console.log({ checkedObject });
        }}
      >
        aaa
      </div>
      <IssueFunction checkedObject={checkedObject} />
      <IssueMain propsFunction={CheckedOrCanceled} />
    </Container>
  );
}

export default Issue;

// const [checkedObject, setChecked] = useState({ 1: { index: 1 }, 2: { index: 2 } });
// const index = Object.values(checkedObject).length,
// const Checked = (e) => {
//   const newState = { ...checkedObject };

//   setChecked((newState[index] = { e }));
// };

// const [checkedObject, setChecked] = useState([]);
// const Checked = (e) => {
//   const newState = checkedObject.slice();
//   newState.unshift(e);
//   setChecked(newState);
// };
// const Checked = (e) => {
//   const newState = { ...checkedObject };
//   const index = Object.values(checkedObject).length;
//   newState[index + 1] = e;
//   setChecked(newState);
// // };
// const Canceled = (e) => {
//   const newState = { ...checkedObject };
//   delete newState[e.id];
//   setChecked(newState);
// };
