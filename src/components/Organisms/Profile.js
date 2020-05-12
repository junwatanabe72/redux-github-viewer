import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Logo from '../Atoms/Logo';
// import Image from '../Atoms/Image';
import ProfileMain from '../Molecules/ProfileMain';

const Container = styled.div`
  margin: 24px;
  font-size: 16px;
`;

const mapStateToProps = (state) => {
  return {
    UserData: state.UserR,
  };
};

function Profile({ UserData }) {
  return (
    <Container>
      <Logo name={'Profile'} />
      <ProfileMain />
    </Container>
  );
}
{
  /* <Image width={'200px'} image={UserData.profileUrl} /> */
}
export default connect(mapStateToProps)(Profile);

// export default Profile;
