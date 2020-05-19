import React, { useState } from 'react';
import styled from 'styled-components';

const StyledTh = styled.th``;

function TableDataCheckBoxCell({ value, propsFunction, checkedAll }) {
  const [Checked, setChecked] = useState(false);

  const changedCheacked = () => {
    setChecked(!Checked);
  };

  const _propsFunction = () => {
    propsFunction(value, Checked);
    changedCheacked();
  };

  const _propsFunctionAll = () => {
    propsFunction(value, checkedAll);
    changedCheacked();
  };

  const Input =
    checkedAll === true ? (
      <input type="checkbox" checked={checkedAll} onChange={_propsFunctionAll} />
    ) : (
      <input type="checkbox" checked={Checked} onChange={_propsFunction} />
    );
  return <StyledTh>{Input}</StyledTh>;
}
export default TableDataCheckBoxCell;
