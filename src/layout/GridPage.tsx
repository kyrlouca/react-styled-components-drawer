import React from 'react';
import styled from 'styled-components';
import TopPage from './TopPage';
import MainPage from './MainPage';



const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 5rem 1fr;
  grid-template-rows: 4rem 1fr 4rem;
  /* grid-gap: 0.2rem; */
  margin: 0;
  height: 100vh;

  grid-template-areas:
    'a a a'
    'b b b'
    'c c c';
`;

const TopAreaDiv = styled.div`
  grid-area: a;
  z-index:1;
`;
const CentralDiv = styled.div`
  grid-area: b;
  z-index:2;
  
`;

const BottomDiv = styled.div`
  grid-area: c;
`;

export default function GridPage() {
  return (
    <MainGrid>
      <TopAreaDiv>
        <TopPage />
      </TopAreaDiv>
      <CentralDiv>
        <MainPage />
      </CentralDiv>
      <BottomDiv>Bottom div</BottomDiv>
    </MainGrid>
  );
}
