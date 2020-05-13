import React, { useState } from 'react';
import styled from 'styled-components';

import IssueFunction from '../Molecules/IssueFunction';
import IssueMain from '../Molecules/IssueMain';

//style
const Container = styled.div`
  margin-top: 16px;
  padding: 16px;
`;

function Issue(props) {
  const [checkedObject, setChecked] = useState();
  const Checked = (e) => {
    // const newCheckedObject = { ...checkedObject };
    setChecked(e);
  };
  return (
    <Container>
      <div onClick={console.log({ checkedObject })}></div>
      <IssueFunction checkedObject={checkedObject} />
      <IssueMain propsFunction={Checked} />
    </Container>
  );
}

export default Issue;
