import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Image from './Image';

const Container = styled.div`
  width: 50%;
  height: 200px;
  color: #808080;
  margin: 8px 16px;
  text-align: left;
`;

const mapStateToProps = (state) => {
  return {
    UserData: state.UserR,
  };
};

function ProfileData({ UserData }) {
  return (
    <Container>
      <p>プロフィール</p>
      <p>
        <Image width={'50px'} image={UserData.profileUrl} />
      </p>
    </Container>
  );
}

export default connect(mapStateToProps)(ProfileData);
