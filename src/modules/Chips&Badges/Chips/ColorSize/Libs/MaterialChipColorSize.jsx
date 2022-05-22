import React from 'react';
import { Chip } from '@mui/material';

export default function MaterialChipColorSize() {
  return (
    <>
      <Chip label={'Default Chip'} className={'m-1'} />
      <Chip
        label={'Primary'}
        color={'primary'}
        className={'m-1'}
        variant={'outlined'}
      />
      <Chip
        label={'Secondary'}
        color={'secondary'}
        className={'m-1'}
        variant={'outlined'}
      />
      <Chip
        label={'Error'}
        color={'error'}
        className={'m-1'}
        variant={'outlined'}
      />
      <Chip label={'Info'} color={'info'} className={'m-1'} size={'small'} />
      <Chip
        label={'Success'}
        color={'success'}
        className={'m-1'}
        size={'small'}
      />
      <Chip
        label={'Warning'}
        color={'warning'}
        className={'m-1'}
        size={'small'}
      />
    </>
  );
}
