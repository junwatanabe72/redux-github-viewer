import React from 'react';
import styled from 'styled-components';
import TableData from './TableData';

function TableBody({
  data,
  propsFunction,
  serachWord,
  checkedAll,
  checkedObject,
  modalPush,
  modalPop,
  changeIssue,
}) {
  const List = Object.values(data).filter((value) => value.title.includes(serachWord));
  return (
    <tbody>
      {List.map((value) => (
        <TableData
          key={value.id}
          value={value}
          propsFunction={propsFunction}
          checkedAll={checkedAll}
          checkedObject={checkedObject}
          modalPush={modalPush}
          modalPop={modalPop}
          changeIssue={changeIssue}
        />
      ))}
    </tbody>
  );
}

export default TableBody;
