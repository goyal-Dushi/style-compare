import React from 'react';
import * as Boot from 'react-bootstrap';

export default function BootstrapAlertColor() {
  return (
    <>
      <Boot.Alert className={'my-2 mx-2'}>{'Primary Default'}</Boot.Alert>
      <Boot.Alert className={'my-2 mx-2'} variant={'warning'}>
        <i className={'bi-exclamation-triangle-fill me-2'} />
        {'Warning Alert'}
      </Boot.Alert>
      <Boot.Alert className={'my-2 mx-2'} variant={'info'}>
        <i className={'bi-info-lg me-2'} />
        {'Info Alert'}
      </Boot.Alert>
      <Boot.Alert className={'my-2 mx-2'} variant={'success'}>
        <i className={'bi-check2-circle me-2'} />
        {'Success Alert'}
      </Boot.Alert>
      <Boot.Alert className={'my-2 mx-2'} variant={'secondary'}>
        {'Secondary Alert'}
      </Boot.Alert>
      <Boot.Alert className={'my-2 mx-2'} variant={'danger'}>
        {'Danger Alert'}
      </Boot.Alert>
      <Boot.Alert className={'my-2 mx-2'} variant={'light'}>
        {'Light Alert'}
      </Boot.Alert>
      <Boot.Alert className={'my-2 mx-2'} variant={'dark'}>
        {'Dark Alert'}
      </Boot.Alert>
    </>
  );
}
