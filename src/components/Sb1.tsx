import React, { ReactElement, ReactChild } from 'react';
import styled from 'styled-components';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: 'red',
      color:'white',
      height: 48
    },
    xdis: {
      background: 'yellow',
      color:'green'

    }
  })
);




const B2 = styled(Button)`
  && {
    background: ${prop => prop.theme.palette.primary.main};
    color: white;
  }
`;

export default function Sb1() {
  const classes = useStyles();
  return (
    <span>
      <B2>The Sb1</B2>
      <Button 
        classes={{
          root: classes.root, // class name, e.g. `classes-nesting-root-x`
          disabled: classes.xdis // class name, e.g. `classes-nesting-label-x`
        }}
      >
        THEMEEE
      </Button>
    </span>
  );
}
