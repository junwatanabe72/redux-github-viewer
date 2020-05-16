import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ModalUpdate from '../Molecules/ModalUpdate';
import TableDataCell from './TableDataCell';
import TableDataCheckBoxCell from './TableDataCheckBoxCell';
import { modalPush, modalPop } from '../../reducers/Modal';

const mapStateToProps = (state) => {
  return { state };
};

function mapDispatchToProps(dispatch) {
  return {
    modalPush: (e) => dispatch(modalPush(e)),
    modalPop: (e) => dispatch(modalPop(e)),
  };
}

function TableData({ value, modalPush, modalPop, propsFunction, checkedAll }) {
  const _modalPush = () => modalPush(<ModalUpdate modalPop={modalPop} Value={value} />);
  return (
    <tr>
      <TableDataCheckBoxCell value={value} propsFunction={propsFunction} checkedAll={checkedAll} />
      <TableDataCell value={value.title} propsFunction={_modalPush} />
      <TableDataCell value={value.status} propsFunction={_modalPush} />
      <TableDataCell value={value.description} propsFunction={_modalPush} />
      <TableDataCell value={value.createBy} propsFunction={_modalPush} />
      <TableDataCell value={value.update} propsFunction={_modalPush} />
    </tr>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(TableData);
