import React from 'react';
import Button from '@material-ui/core/Button';
import red from '@material-ui/core/colors/red';
import styled from 'styled-components';

export const ButtonPrimary = (props: any) => (
    <Button variant="contained" color="primary" disableRipple {...props} />
  );

  export const ButtonError = styled(Button)`
    & .variant {
        
    }
  `;
  
  
