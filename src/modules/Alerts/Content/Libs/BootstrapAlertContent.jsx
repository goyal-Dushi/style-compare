import React from 'react';
import * as Boot from 'react-bootstrap';

export default function BootstrapAlertContent() {
  return (
    <>
      <Boot.Alert variant={'success'}>
        <Boot.Alert.Heading>Success Alert!</Boot.Alert.Heading>
        <p>
          {'This is Success alert -'}
          <Boot.Alert.Link>{' success link '}</Boot.Alert.Link>
        </p>
      </Boot.Alert>
      <Boot.Alert variant={'info'}>
        <Boot.Alert.Heading>{'Info Alert!'}</Boot.Alert.Heading>
        <p>
          {'This is Info alert -'}
          <Boot.Alert.Link>{' info link'} </Boot.Alert.Link>
        </p>
      </Boot.Alert>
    </>
  );
}
