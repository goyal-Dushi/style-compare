import React from 'react';
import { Button } from '@mui/material';

export default function MaterialSizVarButton() {
  return (
    <>
      <Button
        variant={'contained'}
        sx={{ margin: '10px 0px' }}
        color={'primary'}
        size={'large'}
      >
        {'Contained Large Button'}
      </Button>
      <Button
        variant={'outlined'}
        sx={{ margin: '10px 0px' }}
        color={'primary'}
        size={'medium'}
      >
        {'Outlined Medium Button'}
      </Button>
      <Button color={'primary'} sx={{ margin: '10px 0px' }} size={'small'}>
        {'Default variant Text & Small Button'}
      </Button>
    </>
  );
}
