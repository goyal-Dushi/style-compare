import React from 'react';
import { Alert } from '@mui/material';

export default function MaterialAlertColors() {
  return (
    <>
      <Alert sx={{ margin: '5px 0px' }} color={'info'}>
        {'Info Color Alert'}
      </Alert>
      <Alert sx={{ margin: '5px 0px' }} color={'warning'}>
        {'Warning Color Alert'}
      </Alert>
      <Alert sx={{ margin: '5px 0px' }} color={'error'}>
        {'Error Color Alert'}
      </Alert>
      <Alert sx={{ margin: '5px 0px' }} color={'success'}>
        {'Color Success'}
      </Alert>
      <br />
      <Alert sx={{ margin: '5px 0px' }} severity={'info'}>
        {'Info Severity Alert'}
      </Alert>
      <Alert sx={{ margin: '5px 0px' }} severity={'warning'}>
        {'Warning Severity Alert'}
      </Alert>
      <Alert sx={{ margin: '5px 0px' }} severity={'error'}>
        {'Error Severity Alert'}
      </Alert>
      <Alert sx={{ margin: '5px 0px' }}>{'Default Success Alert'}</Alert>
    </>
  );
}
