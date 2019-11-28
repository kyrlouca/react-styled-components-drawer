import React from 'react';
import styled from 'styled-components';
import MenuPage2 from './MenuPage2';

const OuterDiv = styled.div`
  display: flex;
  height: 100%;
  background: red;
`;
const LeftDiv = styled.div`
  background: lightblue;
`;
const RightDiv = styled.div`
  background: lightpink;
  flex: 1 1 auto;
`;

export default function OuterPage() {
  return (
    <OuterDiv>
      <LeftDiv>
        <MenuPage2 />
      </LeftDiv>
      <RightDiv>Right</RightDiv>
    </OuterDiv>
  );
}
