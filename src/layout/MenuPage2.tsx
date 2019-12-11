import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import IconButton, { IconButtonProps } from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import KeyboardTabIcon from '@material-ui/icons/KeyboardTab';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import menuPngI from '../assets/icons/menu.png';
import leftArrowPngI from '../assets/icons/leftArrow.png';
import leftArrowSVG from '../assets/icons/iconmonstr-arrow-1.svg';

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
  /* Display */
  display: flex;
  flex-flow: row nowrap;
`;

const RightDiv = styled.div<{ isCollapsed: boolean }>`
  background: yellow;
  overflow: hidden;
  width: ${props => (props.isCollapsed ? '0' : '999px')};
  max-width: ${props => (props.isCollapsed ? '0' : '150px')};
  transition: width 600ms ease-out, max-width 600ms ease-out;
`;

const LeftDiv = styled.div`
  background: green;
  flex: 1 1 auto;
`;

const XImg = styled.img`
  flex: 1 1 auto;
  display: block;
  background-image: url(${leftArrowSVG});
  /* background: transparent; */
`;

const XImgBtn = styled.button`
  width: 30px;
  background-image: url(${leftArrowSVG});
  background-repeat: no-repeat;
  background-color: transparent;
  background-size:70%;
  background-position:center;
  color: white;
`;

const XBtn = styled.button`
  display: flex;
  height: 50px;
  width: 80px;
  background-color: transparent;
  color: white;
`;

const humberger = './menu.png';
const leftArrow = '../assets/icons/menu.png';
const leftArrow1 = 'leftArrow.png';

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

  return (
    <OuterDiv>
      <TopDiv>
        <IButton onClick={handleClick}>
          {isCollapsed ? <KeyboardTabIcon /> : <KeyboardBackspaceIcon />}
        </IButton>
        <IButton>
          <XImg src={leftArrowSVG} />
        </IButton>

        <XImgBtn></XImgBtn>
        <XBtn>
          <XImgBtn />
        </XBtn>
      </TopDiv>
      <LowerDiv>
        <LeftDiv>leftA</LeftDiv>

        <RightDiv isCollapsed={isCollapsed}>RightB</RightDiv>
      </LowerDiv>
    </OuterDiv>
  );
}
