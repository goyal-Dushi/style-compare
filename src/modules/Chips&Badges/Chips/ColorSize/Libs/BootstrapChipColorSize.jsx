import React from 'react';
import Badge from 'react-bootstrap/Badge';

export default function BootstrapChipColorSize() {
  return (
    <>
      <Badge pill className={'m-1'}>
        {'Primary Default'}
      </Badge>
      <Badge pill className={'fs-1 m-1'} bg={'success'}>
        {'Success'}
      </Badge>
      <Badge pill className={'fs-2 m-1'} bg={'danger'}>
        {'Danger'}
      </Badge>
      <Badge pill className={'fs-3 m-1'} bg={'warning'}>
        {'Warning!'}
      </Badge>
      <Badge pill className={'fs-4 m-1'} bg={'info'}>
        {'Info'}
      </Badge>
      <Badge className={'text-secondary m-1 fs-5'} pill bg={'light'}>
        {'Light'}
      </Badge>
      <Badge className={'fs-6 m-1'} pill bg={'dark'}>
        {'Dark'}
      </Badge>
    </>
  );
}
