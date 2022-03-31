import React from 'react';
import Container from '@mui/material/Container';

export default function Loading({ component }) {
  return (
    <Container fluid className={'d-flex justify-content-center mx-auto pt-3'}>
      <div
        className={
          'w-75 position-relative d-flex flex-column justify-content-center align-items-center'
        }
      >
        <h1 className={'display-4 ps-4'}>{`Loading ${component} ...`}</h1>
        <p> {'Please wait !'} </p>
      </div>
    </Container>
  );
}
