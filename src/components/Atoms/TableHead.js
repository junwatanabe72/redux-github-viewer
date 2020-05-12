import React from 'react';
import styled from 'styled-components';
import TableHeadCell from './TableHeadCell';
import TableCheckBoxCell from './TableCheckBoxCell';

function TableHead(props) {
  return (
    <tr>
      <TableCheckBoxCell />
      <TableHeadCell value={'issue'} />
      <TableHeadCell value={'status'} />
      <TableHeadCell value={'author'} />
      <TableHeadCell value={'date'} />
      <TableHeadCell value={'update'} />
    </tr>
  );
}

export default TableHead;
