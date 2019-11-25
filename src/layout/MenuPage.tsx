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
  height: 100vh;
`;

const LeftDiv = styled.div<{ isSmallSize: boolean }>`
  background: lightblue;
  flex: 0 0 ${props => (props.isSmallSize ? '40px' : '100px')};
  transition: flex-basis 500ms ease-in-out;
`;

const MainDiv = styled.div`
  background: lightyellow;
  flex: 1 1 auto;
`;

const ButtonAreaDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  background: lightpink;
  flex: 1 1 auto;
`;

const isScreenSizeSmall = (size: number) => {
  return size < 900;
};

export default function MenuPage() {
  const [isCollapsed, setBarToCollapse] = useState(
    isScreenSizeSmall(window.innerWidth)
  );
  let ss = useGetScreenWidth();

  if (isScreenSizeSmall(ss) && !isCollapsed) {
    setBarToCollapse(true);
  }
  const handleClick = (e: ButtonEvent) => {
    const isCollapsedL = !isCollapsed || isScreenSizeSmall(ss);
    setBarToCollapse(isCollapsedL);
  };

  return (
    <MaintContainerDiv>
      <LeftDiv isSmallSize={isCollapsed}>
        <ButtonAreaDiv>
          <IconButton
            color="primary"
            aria-label="add an alarm"
            onClick={handleClick}
          >
            {isCollapsed ? <KeyboardTabIcon /> : <KeyboardBackspaceIcon />}
          </IconButton>
        </ButtonAreaDiv>
      </LeftDiv>
      <MainDiv>MainDiv{ss}</MainDiv>
    </MaintContainerDiv>
  );
}
