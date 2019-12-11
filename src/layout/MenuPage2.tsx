import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import IconButton, { IconButtonProps } from '@material-ui/core/IconButton';
import KeyboardTabIcon from '@material-ui/icons/KeyboardTab';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import menu from '../assets/icons/menu.png';
import '../App.css';

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

const OuterDiv = styled.div`
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const TopDiv = styled.div`
  background: smokeWhite;
  flex: 0 0 50px;
  display: flex;
  justify-content: flex-end;
`;

const LowerDiv = styled.div`
  background: red;
  flex: 1 1 auto;
  flex-flow: row nowrap;
  display: flex;
  /* transition : all 700ms ease-out; */
`;

const RightDiv = styled.div<{ isCollapsed: boolean }>`
  background: yellow;
  overflow: hidden;
  width: ${props => (props.isCollapsed ? '0' : '500px')};
  max-width: ${props => (props.isCollapsed ? '0' : '200px')};
  transition: width 600ms ease-out, max-width 600ms ease-out;
`;

const LeftDiv = styled.div`
  background: green;
  flex: 1 1 auto;
`;

const IButton = (props: IconButtonProps) => (
  <IconButton disableRipple aria-label="collapse the menu " {...props} />
);

export default function MenuPage2() {
  const sw = useGetScreenWidth();
  const isScreenSizeSmall = sw < 900;
  const [isCollapsed, setBarToCollapse] = useState(isScreenSizeSmall);

  if (isScreenSizeSmall && !isCollapsed) {
    setBarToCollapse(true);
  }

  const handleClick = (e: ButtonEvent) => {
    const mustCollapse = !isCollapsed || isScreenSizeSmall;
    console.log('jey');
    setBarToCollapse(mustCollapse);
  };

  const ImgH = styled.img`
    display: block;
    height: 30px;
    width: 30px;
    z-index: 1000;
    background: transparent;
  `;

const humberger = './menu.png';
const leftArrow = '../assets/icons/menu.png';
  const leftArrow1 = 'leftArrow.png';
  return (
    <OuterDiv>
      <TopDiv>
        <IButton onClick={handleClick}>
          {isCollapsed ? <KeyboardTabIcon /> : <KeyboardBackspaceIcon />}
        </IButton>
        <ImgH src={humberger} alt="Hum missing" />
        <ImgH src={leftArrow1} alt="Arrow missing" />
      </TopDiv>
      <LowerDiv>
        <LeftDiv>leftA</LeftDiv>

        <RightDiv isCollapsed={isCollapsed}>RightB</RightDiv>
      </LowerDiv>
    </OuterDiv>
  );
}
