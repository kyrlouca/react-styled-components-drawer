import React from 'react';
import styled from 'styled-components';

const MenuDiv = styled.div`
  margin-bottom: 0px;
  /* box-shadow: 0px 0px 4px 4px #006a97; */
  background: #006a97;
  /* background: white; */
  /* border: black 3px solid; */

  color: white;
  display: flex;
  justify-content: center;
  height: calc(100% - 0px);
  flex-flow: row nowrap;
  align-items: center;
`;

export default function TopPage() {
  return <MenuDiv>Top Menu</MenuDiv>;
}
