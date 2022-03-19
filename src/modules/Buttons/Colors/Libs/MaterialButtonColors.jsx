import React from 'react';
import { Button } from '@mui/material';

export default function MaterialButtonColors() {
  return (
    <>
      <Button
        variant={'contained'}
        sx={{ margin: '8px 0px' }}
        color={'primary'}
      >
        {'Primary Default'}
      </Button>
      <Button
        variant={'contained'}
        sx={{ margin: '8px 0px' }}
        color={'secondary'}
      >
        {'Secondary'}
      </Button>
      <Button
        variant={'contained'}
        sx={{ margin: '8px 0px' }}
        color={'success'}
      >
        {'Success'}
      </Button>
      <Button variant={'contained'} sx={{ margin: '8px 0px' }} color={'error'}>
        {'Error'}
      </Button>
      <Button variant={'contained'} sx={{ margin: '8px 0px' }} color={'info'}>
        {'Info'}
      </Button>
      <Button
        variant={'contained'}
        sx={{ margin: '8px 0px' }}
        color={'warning'}
      >
        {'Warning'}
      </Button>
    </>
  );
}
