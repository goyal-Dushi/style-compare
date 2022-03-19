import React from 'react';
import * as Boot from 'react-bootstrap';

function BootstrapAlertVariants() {
  return (
    <>
      <Boot.Alert>{'Default Bootstrap Alert'}</Boot.Alert>
      <Boot.Alert
        style={{ border: '2px solid #0f5132', background: 'none' }}
        variant={'success'}
      >
        {'Inline Style Outline Success'}
      </Boot.Alert>
    </>
  );
}

export default BootstrapAlertVariants;
