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
      <Td>{props.item.issue}</Td>
      <Td>{props.item.status}</Td>
      <Td>{props.item.id}</Td>
      <Td>作成日付Th</Td>
      <Td>更新日付Th</Td>
    </tr>
  );
}

export default TableData;
