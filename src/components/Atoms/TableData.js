import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
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

function TableData({ value, modalPush, propsFunction, checkedAll }) {
  return (
    <tr>
      <TableDataCheckBoxCell value={value} propsFunction={propsFunction} checkedAll={checkedAll} />
      <TableDataCell value={value.title} propsFunction={modalPush} />
      <TableDataCell value={value.status} propsFunction={modalPush} />
      <TableDataCell value={value.description} propsFunction={modalPush} />
      <TableDataCell value={value.createBy} propsFunction={modalPush} />
      <TableDataCell value={value.update} propsFunction={modalPush} />
    </tr>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(TableData);
