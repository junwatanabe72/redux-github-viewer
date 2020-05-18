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
