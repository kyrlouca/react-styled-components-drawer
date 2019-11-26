import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import KeyboardTabIcon from '@material-ui/icons/KeyboardTab';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

type ButtonEvent = React.MouseEvent<HTMLButtonElement>;

const useGetScreenWidth = () => {
  const [ws, setWindowSize] = useState(window.innerWidth);
  const eventListener = () => setWindowSize(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', eventListener);
    return () => {
      window.removeEventListener('resize', eventListener);
    };
  }, []);

  return ws;
};

const MaintContainerDiv = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
`;

const LeftDiv = styled.div<{ isSmallSize: boolean }>`
  background: lightblue;
  overflow: hidden visible;

  flex: 0 0 ${props => (props.isSmallSize ? '60px' : '140px')};
  transition: flex-basis 500ms ease-out;

  display: grid;
  grid-template-rows: 50px 1fr;
  grid-template-columns: 60px 1fr;

  grid-template-areas:
    'a a'
    'b c';
`;

const ButtonAreaDiv = styled.div`
  grid-area: a;
  display: flex;
  justify-content: space-between;
  background: lightpink;
  flex: 1 1 auto;
`;

const LeftDivA = styled.div`
  grid-area: b;
  background: red;
  transition: all 500ms ease-out;
`;

const LeftDivB = styled.div<{ isSmallSize: boolean }>`
  grid-area: c;
  background: blue;
  
`;

const MainDiv = styled.div`
  background: lightyellow;
  flex: 1 1 auto;
`;

export default function MenuPage() {
  let ss = useGetScreenWidth();
  let isScreenSizeSmall = ss < 900;
  const [isCollapsed, setBarToCollapse] = useState(isScreenSizeSmall);

  if (isScreenSizeSmall && !isCollapsed) {
    setBarToCollapse(true);
  }
  const handleClick = (e: ButtonEvent) => {
    const isCollapsedL = !isCollapsed || isScreenSizeSmall;
    setBarToCollapse(isCollapsedL);
  };

  return (
    <MaintContainerDiv>
      <LeftDiv isSmallSize={isCollapsed}>
        <ButtonAreaDiv>
          <IconButton
            color="primary"
            aria-label="add an alarm"
            disableRipple
            onClick={handleClick}
          >
            {isCollapsed ? <KeyboardTabIcon /> : <></>}
            
          </IconButton>
          <IconButton
            color="primary"
            aria-label="add an alarm"
            onClick={handleClick}
          >
            <KeyboardBackspaceIcon />
          </IconButton>
        </ButtonAreaDiv>
        <LeftDivA>A</LeftDivA>
        <LeftDivB isSmallSize={isCollapsed}>dsdsdB</LeftDivB>
      </LeftDiv>
      <MainDiv>MainDiv{ss}</MainDiv>
    </MaintContainerDiv>
  );
}
