import React, { useState } from 'react';
import * as Boot from 'react-bootstrap';

export default function BootstrapAlertDismiss() {
  const [open, setOpen] = useState(true);
  return (
    <div className={'w-100 d-flex'}>
      {open ? (
        <Boot.Alert
          variant={'danger'}
          onClose={() => setOpen(false)}
          dismissible
        >
          <Boot.Alert.Heading>
            {'Oh snap! You got an error!'}
          </Boot.Alert.Heading>
          <p>
            {'Change this and that and try again. Duis mollis, est non commodo'}
          </p>
        </Boot.Alert>
      ) : null}
      <Boot.Button
        onClick={() => {
          setOpen(true);
        }}
        variant={'outline-primary mx-2'}
        style={{ height: 'fit-content' }}
      >
        {'OPEN'}
      </Boot.Button>
    </div>
  );
}
