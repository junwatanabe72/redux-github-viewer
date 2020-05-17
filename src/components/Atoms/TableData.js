import React from 'react';
import styled from 'styled-components';
import ModalUpdate from '../Molecules/ModalUpdate';
import TableDataCell from './TableDataCell';
import TableDataCheckBoxCell from './TableDataCheckBoxCell';

function TableData({ value, modalPush, modalPop, propsFunction, checkedAll, checkedObject }) {
  const _modalPush = () => modalPush(<ModalUpdate modalPop={modalPop} Value={value} />);
  return (
    <tr>
      <TableDataCheckBoxCell
        value={value}
        propsFunction={propsFunction}
        checkedAll={checkedAll}
        checkedObject={checkedObject}
      />
      <TableDataCell value={value.title} propsFunction={_modalPush} />
      <TableDataCell value={value.status} propsFunction={_modalPush} />
      <TableDataCell value={value.description} propsFunction={_modalPush} />
      <TableDataCell value={value.createBy} propsFunction={_modalPush} />
      <TableDataCell value={value.update} propsFunction={_modalPush} />
    </tr>
  );
}
export default TableData;
