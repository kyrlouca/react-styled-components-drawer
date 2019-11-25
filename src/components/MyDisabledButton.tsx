import React, { ReactElement, ReactChild } from 'react';
import styled from 'styled-components';
import {
  createStyles,
  Theme,
  makeStyles,
  createMuiTheme
} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';





const useStyles2 = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: theme.palette.primary.main,      
      borderRadius: 3,
      height: 48
    },
    xdis: {
      background: 'yellow'
    }
  })
);


// background: theme.palette.primary.main,
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: 'green',
      color: 'white',
      borderRadius: 3,
      height: 48
    },
    xdis: {
      background: 'yellow'
    }
  })
);

const Sb1 = styled(Button)`
  color: white;
  && :hover {
    color: red;
  }
`;

type Props ={
    children:ReactChild;
}

export default function MyDisabledButton(props :Props) {
  const classes = useStyles2();
  const { children } = props;
  return (
      
    <Button classes={{  root: classes.root }}>
      {children}
    </Button>
  );
}
