import React from 'react';
import styled from 'styled-components';
import TableHeadCell from './TableHeadCell';
import TableHeadCheckBoxCell from './TableHeadCheckBoxCell';

function TableHead({ propsFunction }) {
  return (
    <thead>
      <tr>
        <TableHeadCheckBoxCell propsFunction={propsFunction} />
        <TableHeadCell value={''} />
        <TableHeadCell value={'status'} />
        <TableHeadCell value={'description'} />
        <TableHeadCell value={'createBy'} />
        <TableHeadCell value={'update'} />
      </tr>
    </thead>
  );
}

export default TableHead;
