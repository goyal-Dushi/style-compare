import React from 'react';
import { Chip } from '@mui/material';

export default function MaterialChipColorSize() {
  return (
    <>
      <Chip label={'Default Chip'} />
      <Chip label={'Primary'} color={'primary'} variant={'outlined'} />
      <Chip label={'Secondary'} color={'secondary'} variant={'outlined'} />
      <Chip label={'Error'} color={'error'} variant={'outlined'} />
      <Chip label={'Info'} color={'info'} size={'small'} />
      <Chip label={'Success'} color={'success'} size={'small'} />
      <Chip label={'Warning'} color={'warning'} size={'small'} />
    </>
  );
}
