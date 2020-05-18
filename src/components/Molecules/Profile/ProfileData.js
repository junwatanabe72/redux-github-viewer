import React from 'react';

import styled from 'styled-components';
import Image from '../../Atoms/Image';

const Container = styled.div`
  width: 50%;
  height: 200px;
  color: #808080;
  margin: 8px 16px;
  text-align: left;
`;

function ProfileData({ UserData }) {
  return (
    <Container>
      <p>プロフィール</p>
      <p>
        <Image width={'64px'} image={UserData.profileUrl} />
      </p>
    </Container>
  );
}

export default ProfileData;
