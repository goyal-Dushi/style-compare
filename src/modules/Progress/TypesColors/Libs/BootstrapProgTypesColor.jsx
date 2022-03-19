import React from 'react';
import * as Boot from 'react-bootstrap';
import { Stack } from '@mui/material';

export default function BootstrapProgTypesColor() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Boot.ProgressBar now={40} variant={'success'} />
      <Boot.ProgressBar now={50} variant={'info'} />
      <Boot.ProgressBar now={60} variant={'danger'} />
      <Boot.ProgressBar now={70} variant={'warning'} />
    </Stack>
  );
}
