import React, { useState } from 'react';
import styled from 'styled-components';

const StyledTh = styled.th`
  min-width: 100px;
  border-left: solid 1px #ccc;
  border-bottom: solid 1px #ccc;
  text-align: center;
`;

function TableDataCheckBoxCell({ value, propsFunction, checkedAll }) {
  const [Checked, setChecked] = useState(false);
  const [allChecked, setAllChecked] = useState(checkedAll);

  const changedCheacked = () => {
    setChecked(!Checked);
  };
  const changedCheackedAll = () => {
    setAllChecked(allChecked);
  };

  const _propsFunction = () => {
    propsFunction(value, Checked);
    changedCheacked();
  };

  // const allFunction = (e) => {
  //   setChecked(e);
  //   propsFunction(value, Checked);
  //   changedCheacked();
  // };

  return (
    <StyledTh>
      {/* <div onClick={() => console.log({ allChecked })}>all</div>
      <div onClick={() => console.log({ Checked })}>checked</div>
      <div
        onClick={() => {
          changedCheackedAll();
        }}
      >
        checkedddd
      </div> */}

      <input type="checkbox" checked={Checked} onChange={_propsFunction} />
    </StyledTh>
  );
}

export default TableDataCheckBoxCell;

// const CheckedOrCanceled = (e, b) => {
//   if (!b) {
//     const newState = { ...checkedObject };
//     newState[e.id] = e;
//     setChecked(newState);
//   } else {
//     const newState = { ...checkedObject };
//     delete newState[e.id];
//     setChecked(newState);
//   }
// };

// <input type="checkbox" checked={Checked} onChange={() => {
//   changedCheackedAll();
