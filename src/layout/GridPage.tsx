import React from 'react';
import styled from 'styled-components';
import TopMenu from '../components/TopMenu';
import MainPage from './MainPage';

const BoxDiv = styled.div`
  border: 3px solid black;
`;

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 5rem 1fr;
  grid-template-rows: 4rem 1fr 4rem;
  grid-gap: 0.2rem;
  margin: 0;
  height: 100vh;

  grid-template-areas:
    'a a a'
    'b b b'
    'c c c';
`;

const TopAreaDiv = styled.div`
  grid-area: a;
`;
const MainDiv = styled.div`
  grid-area: b;  
`;

const BottomDiv = styled.div`
  grid-area: c;
`;


export default function GridPage() {
  return (
    <MainGrid>
      <TopAreaDiv>
        <TopMenu />
      </TopAreaDiv>
      <MainDiv>
        <MainPage />
      </MainDiv>

      <BottomDiv>
        Bottom div 
      </BottomDiv>
    </MainGrid>
  );
}
