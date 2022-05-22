import React from 'react';
import CopyrightSharpIcon from '@mui/icons-material/CopyrightSharp';
import BottomNavigation from '@mui/material/BottomNavigation';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material';

const BottomNav = styled(BottomNavigation)(({ theme }) => ({
  height: 80,
  [theme.breakpoints.down('sm')]: {
    height: 60,
    padding: theme.spacing('20px 0px'),
  },
}));

export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <Paper elevation={4} className={'position-fixed bottom-0 start-0 end-0'}>
      <BottomNav
        className={
          'd-flex flex-column align-items-center justify-content-center'
        }
      >
        <div className={'d-flex'}>
          <CopyrightSharpIcon />
          <p className={'m-0'}> {`LibCompare ${date}`} </p>
        </div>
        <p className={'m-0'}>
          {'By '}
          <a
            target={'_blank'}
            className={'align-middle font-italic'}
            href={process.env.REACT_APP_PORTFOLIO_WEBSITE}
            rel={'noreferrer noopener'}
          >
            {' Dushyant Goyal'}
          </a>
        </p>
      </BottomNav>
    </Paper>
  );
}
