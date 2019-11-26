import React from 'react';
import { makeStyles } from '@material-ui/core';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    color: 'primary',
    background: 'whiteSmoke'
  }
});

const StyledButton = styled(Button)`
  &&& {
    background: blue;
    border-radius: 3px;
    border: 0;
    color: red;
    height: 48px;
    padding: 0 30px;
    box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
    margin-left: auto;
  }
`;

const B2 = styled(Button)`
  && {
    background-color: red;
    color: white;
  }
  & .MuiButton-label {
    color: blue;
    background-color: green;
  }
`;

const B1 = styled(Button)`
  &:hover {
    & .MuiButton-label {
      background-color: red;
      color: white;
    }
  }
`;

 
const MenuItemDiv2 = styled(Button)`
  && {
    background-color: red;
    color: white;
  }
  & .MuiButton-label {
    color: red;
    background-color: white;
  }
`;



const MenuDiv = styled(Paper)`
  &&& {
    /* background: primary; */
    /* color: white; */
    display: flex;
    justify-content: flex-start;
    height: 100%;
    flex-flow: row nowrap;
    align-items: center;
  }
`;

// <Paper className={classes.root}>
export default function TopMenu() {
  const classes = useStyles();
  return (
    <MenuDiv className={classes.root}>
      <MenuItemDiv2>TopMenu1</MenuItemDiv2>
      <MenuItemDiv2>TopMenu2</MenuItemDiv2>      
    </MenuDiv>
  );
}
