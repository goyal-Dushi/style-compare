import React from 'react';

export default function Loading({ component }) {
  return (
    <div className={'w-100 d-flex'}>
      <div
        className={
          'w-75 position-relative d-flex flex-column justify-content-center align-items-center'
        }
      >
        <h1
          className={'display-4 ps-4'}
        >{`Loading ${component} component..`}</h1>
        <p> {'Please wait !'} </p>
      </div>
    </div>
  );
}
