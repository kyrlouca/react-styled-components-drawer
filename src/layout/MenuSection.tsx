import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as ArrowCollapseRC } from '../assets/icons/arrow-collapse-left.svg';
import { ReactComponent as HumbergerRC } from '../assets/icons/menu-hamburger.svg';
import { ReactComponent as ArrowRightRC } from '../assets/icons/arrow-right-Google.svg';

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
  box-shadow: 3px 0px 4px 2px rgba(0, 0, 0, 0.3);
  /* box-shadow: 4px 0px 4px 2px rgba(0, 0, 0, 0.2); */

  margin: 0;
  margin-right: 5px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

// background: linear-gradient(#006A97,#0195CD );
// background-image: linear-gradient(rgb(0, 106, 151), rgb(1, 149, 205));

const MenuTopDiv = styled.div`
  /* background: linear-gradient(#006a97, #0195cd); */
  background: rgb(0, 106, 151);
  flex: 0 0 50px;
  display: flex;
  justify-content: flex-end;
`;

const MenuLowDiv = styled.div`
  flex: 1 1 auto;

  /* Display */
  display: flex;
  flex-flow: row nowrap;
`;

const RightDiv = styled.div<{ isCollapsed: boolean }>`
  background: #0195cd;
  overflow: hidden;
  padding-left:5px;
  width: ${props => (props.isCollapsed ? '0' : '999px')};
  max-width: ${props => (props.isCollapsed ? '0' : '150px')};
  transition: width 600ms ease-out, max-width 600ms ease-out;
  
`;

const LeftDiv = styled.div`
  background: linear-gradient(to right, #006a97, #0195cd);
  border-right: 1px black solid;
  flex: 1 1 auto;
  
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

const KIcons = styled.div`
  margin: 10px;
`;

export default function MenuSection() {
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
    <MenuOuterDiv>
      <MenuTopDiv>
        <XBtn onClick={handleClick}>
          {isCollapsed ? <XHumburger /> : <XArrowCollapse />}
        </XBtn>
      </MenuTopDiv>
      <MenuLowDiv>
        <LeftDiv>
          <KIcons>
            <ArrowRightRC />
          </KIcons>
          <KIcons>
            <ArrowCollapseRC />
          </KIcons>
        </LeftDiv>

        <RightDiv isCollapsed={isCollapsed}>
          <div>Visit the Hospi</div>
          <div>Settings</div>
        </RightDiv>
      </MenuLowDiv>
    </MenuOuterDiv>
  );
}
