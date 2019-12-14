import React from 'react';
import styled from 'styled-components';



const StyledButton = styled.button`
  &&& {
    background: blue;
    border-radius: 3px;
    border: 0;
    color: red;
    height: 48px;
    padding: 0 30px;
    box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
    margin-left: auto;
  }
`;

 



const MenuDiv = styled.div`
  &&& {
    /* background: primary; */
    /* color: white; */
    display: flex;
    justify-content: flex-start;
    height: 100%;
    flex-flow: row nowrap;
    align-items: center;
  }
`;

// <Paper className={classes.root}>
export default function TopMenu() {
  return (
    <MenuDiv>
      Manu div
    </MenuDiv>
  );
}
