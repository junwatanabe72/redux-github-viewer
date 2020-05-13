import React from 'react';
import Logo from '../Atoms/Logo';
import IssueButtons from './IssueButtons';
import Input from '../Atoms/Input';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

function IssueFunction({ checkedObject }) {
  return (
    <Container>
      <Logo name={'Issue'} />
      <Input PlaceHolder={'issue名で検索'} />
      <IssueButtons checkedObject={checkedObject} />
    </Container>
  );
}

export default IssueFunction;
