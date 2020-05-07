import React from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  width: 100%;
  padding: 8px 16px;
`;
const Frame = styled.div`
  border-radius: 6px;
  border-width: 1px;
  border-style: solid;
`;
const Search = styled.input`
  width: 100%;
  padding: 8px;
  border-width: inital;
  border-style: none;
  outline: none;
  background: none;
`;

function IssueSearch(props) {
  return (
    <Layout>
      <Frame>
        <Search />
      </Frame>
    </Layout>
  );
}

export default IssueSearch;
