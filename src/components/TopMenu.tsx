import React from 'react';
import styled from 'styled-components';

const PaperDiv = styled.div`
  background: whitesmoke;
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.3);
`;

const MenuDiv = styled.div`
  background: whitesmoke;  
  display: flex;
  justify-content: flex-start;
  height: 100%;
  flex-flow: row nowrap;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export default function TopMenu() {
  return <MenuDiv>Manu div4</MenuDiv>;
}
