import React from 'react';
import { Mail } from '@mui/icons-material';
import Badge from '@mui/material/Badge';

export default function MaterialBadge() {
  return (
    <>
      <Badge max={100} color={'secondary'} badgeContent={120}>
        <Mail />
      </Badge>
      <Badge
        max={50}
        color={'secondary'}
        badgeContent={44}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Mail />
      </Badge>
      <Badge
        badgeContent={0}
        showZero
        color={'secondary'}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <Mail />
      </Badge>
      <Badge
        badgeContent={0}
        color={'secondary'}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
      >
        <Mail />
      </Badge>
    </>
  );
}
