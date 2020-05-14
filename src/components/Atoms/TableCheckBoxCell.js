import React, { useState } from 'react';
import styled from 'styled-components';

const StyledTh = styled.th`
  min-width: 100px;
  border-left: solid 1px #ccc;
  border-bottom: solid 1px #ccc;
  text-align: center;
`;

function TableCheckBoxCell({ value, propsFunction }) {
  const [checked, setChecked] = useState(false);
  const _propsFunction = () => {
    propsFunction(value, checked);
    setChecked(!checked);
  };
  return (
    <StyledTh>
      <input type="checkbox" onChange={_propsFunction} />
    </StyledTh>
  );
}

export default TableCheckBoxCell;
