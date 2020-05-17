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

const status = {
  open: 'open',
  close: 'close',
};

const date = new Date();
const format = 'MM-DD-YYYY';
const sampleDate = (date, format) => {
  format = format.replace(/YYYY/, date.getFullYear());
  format = format.replace(/MM/, date.getMonth() + 1);
  format = format.replace(/DD/, date.getDate());

  return format;
};
const createDate = sampleDate(date, format).toString();

function ModalMain({ createIssue, modalPop }) {
  const [iss, setIssue] = useState('');
  const [sta, setStatus] = useState('');
  const onSubmit = () => {
    const dat = {
      title: iss,
      description: sta,
      status: status.open,
      createBy: createDate,
      update: createDate,
    };
    if (!dat) {
      return;
    }
    createIssue(dat);
    setIssue('');
    setStatus('');
    modalPop();
  };
  const onChangeIssue = (e) => {
    setIssue(e.target.value);
  };
  const onChangeStatus = (e) => {
    setStatus(e.target.value);
  };

  return (
    <Container>
      <Logo name={'Issueを追加'} />
      <Input
        PlaceHolder={'タイトルを入力してください。'}
        value={iss}
        propsFunction={onChangeIssue}
      />
      <label>説明</label>
      <Input PlaceHolder={'説明を入力してください。'} value={sta} propsFunction={onChangeStatus} />
      <ButtonSet>
        <Button ButtonName={'作成'} propsFunction={onSubmit} />
        <Button ButtonName={'閉じる'} propsFunction={modalPop} />
      </ButtonSet>
    </Container>
  );
}

export default ModalMain;
