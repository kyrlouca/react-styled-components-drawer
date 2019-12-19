import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as ArrowCollapseRC } from '../assets/icons/arrow-collapse-left.svg';
import { ReactComponent as HumbergerRC } from '../assets/icons/menu-hamburger.svg';

/* 
The MenuSection consists of three parts
1. the Left part (menu bar and menu items icons )
2. the Right Part (menu items description )
 */
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

const MenuOuterDiv = styled.div`
  /* box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.3); */
  /* box-shadow: 3px 4px 4px 12px rgba(0, 0, 0, 0.2); */

  margin: 0;
  margin-right: 0px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

// background: linear-gradient(#006A97,#0195CD );

const MenuTopDiv = styled.div`
  background: rgb(0, 106, 151);
  flex: 0 0 50px;
  display: flex;
  justify-content: flex-end;
`;

const MenuLowDiv = styled.div<{ isCollapsed: boolean }>`
  flex: 1 1 auto;

  display: flex;
  flex-flow: row nowrap;
  background: #0195cd;
 background-image: linear-gradient(to left,  rgb(1, 149, 205),rgb(0, 106, 151));

  overflow: hidden;
  padding-left:5px;
  width: ${props => (props.isCollapsed ? '60px' : '120px')};
  /* max-width: ${props => (props.isCollapsed ? '0' : '150px')}; */
  transition: width 600ms ease-out, max-width 600ms ease-out;
  
`;

const XBtn = styled.button`
  width: 50px;
  height: 50px;
  border: 0;
  border-radius: 25px;
  background: lightblue;

  &:active {
    filter: brightness(80%);
  }
  &:hover {
    filter: brightness(70%);
  }
  &:focus {
    outline: none;
  }
`;

const XArrowCollapse = styled(ArrowCollapseRC)`
  fill: blue;
  height: 40%;
  margin: auto;
  &:hover {
    cursor: pointer;
  }
  transition: all 0.4s ease 0s;
`;
const XHumburger = styled(HumbergerRC)`
  fill: blue;
  /* height: 80%; */
  margin: auto;
  &:hover {
    cursor: pointer;
  }
`;

export default function MenuSectionOne() {
  const sw = useGetScreenWidth();
  const isScreenSizeSmall = sw < 400;
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
    <MenuOuterDiv>
      <MenuTopDiv>
        <XBtn onClick={handleClick}>
          {isCollapsed ? <XHumburger /> : <XArrowCollapse />}
        </XBtn>
      </MenuTopDiv>

      <MenuLowDiv isCollapsed={isCollapsed}>
        <div>Visit the Hospi</div>
        <div>Settings</div>
      </MenuLowDiv>
    </MenuOuterDiv>
  );
}
