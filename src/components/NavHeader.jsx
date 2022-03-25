import React from 'react';
import { Tooltip } from '@mui/material';
import styles from './navhead.module.css';

export default function NavHeader() {
  return (
    <nav className={styles.header}>
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
    </nav>
  );
}
