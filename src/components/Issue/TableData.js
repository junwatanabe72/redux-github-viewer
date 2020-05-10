import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Td = styled.td`
  min-width: 150px;
  border-top: solid 1px #ccc;
  text-align: center;
`;

// function mapStateToProps(state) {
//   return { data: state.data };
// }

function TableData(props) {
  return (
    <tr>
      <Td>
        <input type="checkbox" />
      </Td>
      <Td>{props.issue}</Td>
      <Td>{props.status}</Td>
      <Td>作成者Th</Td>
      <Td>作成日付Th</Td>
      <Td>更新日付Th</Td>
    </tr>
  );
}

export default TableData;
