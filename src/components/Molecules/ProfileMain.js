import React from 'react';
import styled from 'styled-components';
import ProfileData from '../Atoms/ProfileData';
import ProfileDataB from '../Atoms/ProfileDataB';

const Container = styled.div`
  display: flex;
  margin-top: 48px;
  border-radius: 6px;
  border: 1px solid #c0c0c0;
`;

function ProfileMain(props) {
  return (
    <Container>
      <ProfileData />
      <ProfileDataB />
    </Container>
  );
}

export default ProfileMain;
