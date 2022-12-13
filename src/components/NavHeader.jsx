import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Grid, IconButton, styled } from '@mui/material';
import ThemeButton from './ThemeButton';

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
          className={'burger-icon fs-2 text-reset'}
        >
          <i className={'bi bi-list'} />
        </IconButton>
        <h1 className={'display-6'}> {'LibCompare'} </h1>
        <Grid
          container
          direction={'row'}
          justifyContent={'end'}
          alignItems={'center'}
        >
          <a
            target={'_blank'}
            href={process.env.REACT_APP_GITHUB_URL}
            title={'Github'}
            className={'fs-2 text-reset'}
            rel={'noreferrer noopener'}
          >
            <i className={'bi bi-github'} />
          </a>
          <ThemeButton />
        </Grid>
      </Toolbar>
    </CustomAppbar>
  );
}
