import React from 'react';
import { Stack, LinearProgress, CircularProgress } from '@mui/material';

export default function MaterialProgTypesColor() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <CircularProgress color={'secondary'} />
      <CircularProgress color={'success'} />
      <LinearProgress color={'info'} />
      <LinearProgress color={'error'} />
      <LinearProgress color={'warning'} />
      <LinearProgress />
    </Stack>
  );
}
