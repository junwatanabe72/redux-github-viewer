import React from 'react';
import styled from 'styled-components';

const Th = styled.th`
  min-width: 100px;
  border-top: solid 1px #ccc;
  text-align: center;
`;

function TableHead() {
  return (
    <tr>
      <Th>
        <input type="checkbox" />
      </Th>
      <Th>issue</Th>
      <Th>ステータス</Th>
      <Th>作成者</Th>
      <Th>作成日付</Th>
      <Th>更新日付</Th>
    </tr>
  );
}

export default TableHead;
