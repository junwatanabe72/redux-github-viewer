import React from 'react';
import styled from 'styled-components';
import Logo from '../Atoms/Logo';
import ProfileMain from '../Molecules/ProfileMain';
const Container = styled.div`
  margin: 24px;
  font-size: 16px;
`;

function Profile({ UserData }) {
  return (
    <Container>
      <Logo name={'Profile'} />
      <ProfileMain UserData={UserData} />
    </Container>
  );
}

export default Profile;
