import React, { useState } from 'react';

import styled from 'styled-components';
import Logo from '../Atoms/Logo';
import Button from '../Atoms/Button';
import Input from '../Atoms/Input';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px;
`;

const ButtonSet = styled.div`
  display: flex;
  justify-content: end;
`;

const StyledSelect = styled.select`
  width: 64px;
`;

const date = new Date();
const format = 'MM-DD-YYYY';
const sampleDate = (date, format) => {
  format = format.replace(/YYYY/, date.getFullYear());
  format = format.replace(/MM/, date.getMonth() + 1);
  format = format.replace(/DD/, date.getDate());
  return format;
};
const createDate = sampleDate(date, format).toString();

const status = {
  open: 'open',
  close: 'close',
};

function ModalUpdate({ changeIssue, modalPop, Value }) {
  const [iss, setIssue] = useState(Value.title);
  const [des, setDescription] = useState(Value.description);
  const [sta, setStatus] = useState(Value.status);

  const oppositedStatus = Value.status === 'open' ? status.close : status.open;

  const onSubmit = () => {
    const dat = {
      title: iss,
      description: des,
      status: sta,
      createBy: Value.createBy,
      id: Value.id,
      update: createDate,
    };
    if (!dat) {
      return;
    }
    changeIssue(dat);
    setIssue('');
    // setStatus('');
    setDescription('');
    modalPop();
  };
  const onChangeIssue = (e) => {
    setIssue(e.target.value);
  };
  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  const onChangeStatus = (e) => {
    setStatus(e.target.value);
  };

  return (
    <Container>
      <Logo name={'Issueを更新'} />
      <label>タイトル</label>
      <Input PlaceHolder={Value.title} value={iss} propsFunction={onChangeIssue} />
      <label>説明</label>
      <Input PlaceHolder={Value.description} value={des} propsFunction={onChangeDescription} />
      <label>ステータス</label>
      <StyledSelect onChange={onChangeStatus}>
        <option>{Value.status}</option>
        <option>{oppositedStatus}</option>
      </StyledSelect>
      <ButtonSet>
        <Button ButtonName={'更新'} propsFunction={onSubmit} />
        <Button ButtonName={'閉じる'} propsFunction={modalPop} />
      </ButtonSet>
    </Container>
  );
}

export default ModalUpdate;
