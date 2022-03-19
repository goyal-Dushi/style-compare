import React from 'react';
import * as Bootstrap from 'react-bootstrap';

export default function BootstrapDisabledBtn() {
  return (
    <>
      <Bootstrap.Button
        className={'mt-2 mb-2'}
        variant={'primary'}
        size={'lg'}
        disabled
      >
        {'Disabled'}
      </Bootstrap.Button>
      <Bootstrap.Button
        className={'mt-2 mb-2'}
        variant={'outline-primary'}
        size={'lg'}
        disabled
      >
        {'Disabled'}
      </Bootstrap.Button>
    </>
  );
}
