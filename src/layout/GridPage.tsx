import React from 'react';
import styled from 'styled-components';
import TopMenu from '../components/TopMenu';
import MainArea from '../components/MainArea'
import dButtom from '../components/MyDisabledButton';


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
    'b c c'
    'd d d';
`;

const TopAreaDiv = styled.div`
  grid-area: a;
  /* border: 4px transparent solid; */
  /* border-radius: 16px; */
`;

const SideDiv = styled.div`
  grid-area: b;
  background: lightblue;
`;

const MainDiv = styled.div`
  grid-area: c;
  background: whitesmoke;
`;

const BottomDiv = styled.div`
  grid-area: d;
  background: yellow;
`;

export default function GridPage() {
  return (
    <MainGrid>
      <TopAreaDiv>
        <TopMenu />
      </TopAreaDiv>
      <MainDiv>
        
        <MainArea/>
      </MainDiv>
      <SideDiv>SIdeDive</SideDiv>
      <BottomDiv>Bottom div</BottomDiv>
    </MainGrid>
  );
}
