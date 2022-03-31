import React from 'react';
import CopyrightSharpIcon from '@mui/icons-material/CopyrightSharp';
import BottomNavigation from '@mui/material/BottomNavigation';
import Paper from '@mui/material/Paper';

export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <Paper elevation={4} className={'position-fixed bottom-0 start-0 end-0'}>
      <BottomNavigation
        className={
          'd-flex flex-column align-items-center justify-content-center py-2'
        }
        sx={{ height: '80px' }}
      >
        <div className={'d-flex'}>
          <CopyrightSharpIcon />
          <p className={'m-0'}> {`LibCompare ${date}`} </p>
        </div>
        <p style={{ fontSize: '14px' }}>
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
      </BottomNavigation>
    </Paper>
  );
}
