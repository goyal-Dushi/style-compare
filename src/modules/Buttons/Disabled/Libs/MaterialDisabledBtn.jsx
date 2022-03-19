import React from 'react';
import { Button } from '@mui/material';

export default function MaterialDisabledBtn() {
  return (
    <>
      <Button
        disabled
        sx={{ margin: '10px 0px' }}
        variant={'contained'}
        size={'large'}
        color={'primary'}
      >
        {'Disabled'}
      </Button>
      <Button
        disabled
        sx={{ margin: '10px 0px' }}
        variant={'outlined'}
        size={'large'}
        color={'primary'}
      >
        {'Disabled'}
      </Button>
      <Button
        sx={{ margin: '10px 0px' }}
        disabled
        size={'large'}
        color={'primary'}
      >
        {'Disabled'}
      </Button>
    </>
  );
}
