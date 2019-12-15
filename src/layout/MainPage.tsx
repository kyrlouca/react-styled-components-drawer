import React from 'react';
import styled from 'styled-components';
import MenuSection from './MenuSection';

const OuterDiv = styled.div`
  /* box-shadow: 4px 0px 4px 2px rgba(0, 0, 0, 0.2); */
  box-shadow: 3px 0px 4px 2px rgba(0, 0, 0, 0.3);

  display: flex;
  height: 100%;
`;
const LeftDiv = styled.div`
  /* This is where the expanding menu is inserted */
  margin: 0;
`;
const RightDiv = styled.div`
  /* this is where the content of the main page is inserted */

  background: whitesmoke;

  flex: 1 1 auto;
  margin: 0;
  padding: 0;
`;

export default function MainPage() {
  return (
    <OuterDiv>
      <LeftDiv>
        <MenuSection />
      </LeftDiv>
      <RightDiv>Right</RightDiv>
    </OuterDiv>
  );
}
