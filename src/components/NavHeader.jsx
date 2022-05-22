import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { IconButton, styled } from '@mui/material';

const CustomAppbar = styled(AppBar)(({ theme }) => ({
  color: 'inherit',
  [theme.breakpoints.down('md')]: {
    '.burger-icon': {
      display: 'block',
    },
  },
  [theme.breakpoints.up('md')]: {
    '.burger-icon': {
      display: 'none',
    },
  },
}));

export default function NavHeader(props) {
  const { toggleNav } = props;

  return (
    <CustomAppbar position={'fixed'} color={'inherit'} role={'navigation'}>
      <Toolbar
        className={'d-flex justify-content-between align-items-center px-2'}
      >
        <IconButton
          onClick={() => toggleNav()}
          className={'burger-icon fs-2 text-dark'}
        >
          <i className={'bi bi-list'} />
        </IconButton>
        <h1 className={'display-6'}> {'LibCompare'} </h1>
        <a
          target={'_blank'}
          href={process.env.REACT_APP_GITHUB_URL}
          title={'Github'}
          className={'fs-2 text-dark'}
          rel={'noreferrer noopener'}
        >
          <i className={'bi bi-github'} />
        </a>
      </Toolbar>
    </CustomAppbar>
  );
}
