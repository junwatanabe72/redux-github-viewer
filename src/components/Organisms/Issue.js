import React, { useState } from 'react';
import styled from 'styled-components';
import IssueFunction from '../Molecules/Issue/IssueFunction/IssueFunction';
import IssueMain from '../Molecules/Issue/IssueMain';

//style
const Container = styled.div`
  margin-top: 16px;
  padding: 16px;
`;

function Issue({ data, modalPush, modalPop, createIssue, changeIssue, deleteIssue }) {
  const [checkedObject, setChecked] = useState({});
  const [serachWord, setWord] = useState('');
  const [checkedAll, setCheckedAll] = useState(false);
  //checkedAll
  const CheckedOrCanceledAll = () => {
    setCheckedAll(!checkedAll);
  };
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
  //serchWord
  const InputWord = (e) => {
    setWord(e.target.value);
  };

  return (
    <Container>
      <IssueFunction
        checkedObject={checkedObject}
        propsFunction={InputWord}
        checkedAll={checkedAll}
        data={data}
        modalPush={modalPush}
        modalPop={modalPop}
        deleteIssue={deleteIssue}
        createIssue={createIssue}
      />
      <IssueMain
        propsFunction={CheckedOrCanceled}
        serachWord={serachWord}
        checkedObject={checkedObject}
        CheckedOrCanceledAll={CheckedOrCanceledAll}
        checkedAll={checkedAll}
        data={data}
        modalPush={modalPush}
        modalPop={modalPop}
        changeIssue={changeIssue}
      />
    </Container>
  );
}

export default Issue;
