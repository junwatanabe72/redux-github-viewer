import React from 'react';
import styled from 'styled-components';
import ModalUpdate from '../../../Modal/ModalUpdate';
import TableDataCell from './TableDataCell';
import TableDataCheckBoxCell from './TableDataCheckBoxCell';

const StyledTr = styled.tr`
  border-top: solid 1px #ccc;
  text-align: center;
`;

function TableData({ value, modalPush, modalPop, propsFunction, checkedAll, changeIssue }) {
  const _modalPush = () =>
    modalPush(<ModalUpdate modalPop={modalPop} Value={value} changeIssue={changeIssue} />);
  return (
    <StyledTr>
      <TableDataCheckBoxCell value={value} propsFunction={propsFunction} checkedAll={checkedAll} />
      <TableDataCell value={value.title} propsFunction={_modalPush} />
      <TableDataCell value={value.status} propsFunction={_modalPush} />
      <TableDataCell value={value.createBy} propsFunction={_modalPush} />
      <TableDataCell value={value.createAt} propsFunction={_modalPush} />
      <TableDataCell value={value.updateAt} propsFunction={_modalPush} />
    </StyledTr>
  );
}
export default TableData;
