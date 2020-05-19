import React, { useState } from 'react';

import styled from 'styled-components';
import Logo from '../../Atoms/Logo';
import Button from '../../Atoms/Button';
import Input from '../../Atoms/Input';
import TextArea from '../../Atoms/TextArea';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: auto;
  padding: 8px;
`;

const StyledLogo = styled.div`
  padding: 16px 8px;
`;
const StyledInput = styled.div`
  padding: 32px 0px 16px;
`;

const StyledInputTitle = styled.div`
  padding: 16px;
`;
const StyledInputDes = styled.div`
  padding: 16px;
`;

const Blank = styled.div`
  padding: 16px;
  min-height: 50px;
`;

const StyledP = styled.p`
  display: inline-block;
  width: 100%;
  padding: 8px;
  margin: 4px;
  border-radius: 6px;
  color: rgb(215, 58, 73);
  background-color: rgba(215, 58, 73, 0.35);
`;

const errorMessage = {
  title: <StyledP>タイトルを入力してください</StyledP>,
  description: <StyledP>説明を入力してください</StyledP>,
};

const ButtonSet = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledSelect = styled.div`
  padding: 16px;
`;
const StyledSelectBar = styled.select`
  margin: 16px;
  display: block;
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
  const [vaildMessege, setMessage] = useState('');

  const oppositedStatus = Value.status === 'open' ? status.close : status.open;

  const onSubmit = () => {
    const data = {
      title: iss,
      description: des,
      status: sta,
      id: Value.id,
      createBy: Value.createBy,
      createAt: Value.createAt,
      updateAt: createDate,
    };

    if (!data.title) {
      setMessage(errorMessage.title);
      return;
    }
    if (!data.des) {
      setMessage(errorMessage.description);
      return;
    }

    changeIssue(data);
    setIssue('');
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
      <StyledLogo>
        <Logo name={'Issueを更新'} />
      </StyledLogo>
      <StyledInput>
        <StyledInputTitle>
          <label>タイトル</label>
          <Input PlaceHolder={Value.title} value={iss} propsFunction={onChangeIssue} />
        </StyledInputTitle>
        <StyledInputDes>
          <label>説明</label>
          <TextArea
            PlaceHolder={Value.description}
            value={des}
            propsFunction={onChangeDescription}
          />
        </StyledInputDes>
      </StyledInput>
      <StyledSelect>
        <label>ステータス</label>
        <StyledSelectBar onChange={onChangeStatus}>
          <option>{Value.status}</option>
          <option>{oppositedStatus}</option>
        </StyledSelectBar>
      </StyledSelect>
      <Blank>{vaildMessege}</Blank>
      <ButtonSet>
        <Button ButtonName={'更新'} type={'primary'} propsFunction={onSubmit} />
        <Button ButtonName={'閉じる'} propsFunction={modalPop} />
      </ButtonSet>
    </Container>
  );
}

export default ModalUpdate;