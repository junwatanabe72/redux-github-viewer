import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Logo from '../Atoms/Logo';
import Button from '../Atoms/Button';
import Input from '../Atoms/Input';
import { addIssue } from '../../reducers/Issue';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px;
`;

const ButtonSet = styled.div`
  display: flex;
  justify-content: end;
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

function ModalMain({ createIssue, modalPop, component }) {
  const [iss, setIssue] = useState('');
  const [sta, setStatus] = useState('');
  const onSubmit = () => {
    const dat = { title: iss, description: sta };
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
      <label
        onClick={() => {
          console.log(component);
        }}
      >
        {component}
      </label>
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalMain);

// return (
//   <Container>
//     <Logo name={'Issueを追加'} />
//     <label>タイトル</label>
//     <Input
//       PlaceHolder={'タイトルを入力してください。'}
//       value={iss}
//       propsFunction={onChangeIssue}
//     />
//     <label>説明</label>
//     <Input PlaceHolder={'説明を入力してください。'} value={sta} propsFunction={onChangeStatus} />
//     <ButtonSet>
//       <Button ButtonName={'作成'} propsFunction={onSubmit} />
//       <Button ButtonName={'閉じる'} propsFunction={modalPop} />
//     </ButtonSet>
//   </Container>
// );
//
