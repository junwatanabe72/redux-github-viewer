import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Container = styled.div`
  width: 50%;
  height: 200px;
  color: #808080;
  margin: 8px 16px;
  text-align: left;
`;
const StyledP = styled.p`
  color: black;
`;

const mapStateToProps = (state) => {
  return {
    UserData: state.UserR,
  };
};

function ProfileData({ UserData }) {
  return (
    <Container>
      <p>ユーザ名</p>
      <StyledP>{UserData.name}</StyledP>
      <p>メールアドレス</p>
      <StyledP>{UserData.email}</StyledP>
    </Container>
  );
}

export default connect(mapStateToProps)(ProfileData);
