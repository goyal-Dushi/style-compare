import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from 'react-bootstrap/Tooltip';

export default function NavHeader() {
  return (
    <AppBar position={'sticky'} color={'inherit'}>
      <Toolbar className={'d-flex justify-content-between px-5'}>
        <h1 className={'display-6'}> {'LibCompare'} </h1>
        <Tooltip title={'View on Github'} arrow placement={'left'}>
          <a
            target={'_blank'}
            href={process.env.REACT_APP_GITHUB_URL}
            style={{
              color: 'black',
              fontSize: '30px',
            }}
            rel={'noreferrer noopener'}
          >
            <i className={'bi bi-github'} />
          </a>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
}
