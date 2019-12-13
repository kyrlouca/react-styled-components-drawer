import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { ReactComponent as ArrowRightRC } from '../assets/icons/arrow-right-Google.svg';
import { ReactComponent as ArrowCollapseRC } from '../assets/icons/arrow-collapse-left.svg';
import ArrowRightSVG from '../assets/icons/arrow-right-Google.svg';

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

const XImgBtn = styled.button`
  width: 30px;
  background-image: url(${ArrowRightSVG});
  background-repeat: no-repeat;
  background-color: transparent;
  background-size: 80%;
  background-position: center;
  background: transparent;
`;

const XBtn = styled.button`
  width: 50px;
  height: 50px;
  border: 0;
  border-radius: 25px;
  color: blue;
  /* background: transparent , linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ); */
  background: transparent ;
  opacity:0.1;
  &:active{
    background: blue;
  }
  &:hover {
    background: blue;
  }
  &:focus{
    outline:none;
  }
`;

const XArrowCollapse = styled(ArrowCollapseRC)`
  fill: red;
  height: 50%;
  margin: auto;
  &:hover {
    cursor: pointer;
  }
  transition: all 0.4s ease 0s;
`;
const XArrowRight = styled(ArrowRightRC)`
  fill: red;
  height: 30%;
  margin: auto;
  &:hover {
    cursor: pointer;
  }
`;


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
        <XBtn onClick={handleClick}>
          {isCollapsed ? <XArrowCollapse /> : <XArrowRight />}
        </XBtn>
      </TopDiv>
      <LowerDiv>
        <LeftDiv>leftA</LeftDiv>

        <RightDiv isCollapsed={isCollapsed}>RightB</RightDiv>
      </LowerDiv>
    </OuterDiv>
  );
}
