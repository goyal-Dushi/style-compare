import React from 'react';
import * as Boot from 'react-bootstrap';

export default function BootstrapChipColorSize() {
  return (
    <>
      <Boot.Badge pill> {'Primary Default'} </Boot.Badge>
      <Boot.Badge pill className={'fs-1'} bg={'success'}>
        {'Success'}
      </Boot.Badge>
      <Boot.Badge pill className={'fs-2'} bg={'danger'}>
        {'Danger'}
      </Boot.Badge>
      <Boot.Badge pill className={'fs-3'} bg={'warning'}>
        {'Warning!'}
      </Boot.Badge>
      <Boot.Badge pill className={'fs-4'} bg={'info'}>
        {'Info'}
      </Boot.Badge>
      <Boot.Badge className={'text-secondary fs-5'} pill bg={'light'}>
        {'Light'}
      </Boot.Badge>
      <Boot.Badge className={'fs-6'} pill bg={'dark'}>
        {'Dark'}
      </Boot.Badge>
    </>
  );
}
