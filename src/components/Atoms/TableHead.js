import React from 'react';
import styled from 'styled-components';
import TableHeadCell from './TableHeadCell';
import TableCheckBoxCell from './TableCheckBoxCell';

function TableHead(props) {
  return (
    <tr>
      <TableCheckBoxCell />
      <TableHeadCell value={''} />
      <TableHeadCell value={'status'} />
      <TableHeadCell value={'description'} />
      <TableHeadCell value={'createBy'} />
      <TableHeadCell value={'update'} />
    </tr>
  );
}

export default TableHead;
