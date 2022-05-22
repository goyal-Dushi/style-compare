import React from 'react';
import Container from '@mui/material/Container';
import Page from './Page';

export default function Loading({ component }) {
  return (
    <Container fluid className={'d-flex justify-content-center mx-auto pt-3'}>
      <Page>
        <h1 className={'display-4 ps-4'}>{`Loading ${component} ...`}</h1>
        <p className={'text-center'}> {'Please wait !'} </p>
      </Page>
    </Container>
  );
}
