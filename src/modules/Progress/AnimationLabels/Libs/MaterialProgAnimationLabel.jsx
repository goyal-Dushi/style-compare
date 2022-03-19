import React, { useState, useRef, useEffect } from 'react';
import {
  CircularProgress,
  LinearProgress,
  Stack,
  Box,
  Typography,
} from '@mui/material';

export default function MaterialProgAnimationLabel() {
  const [buffProgress, setBuffProgress] = useState(0);
  const [buffer, setBuffer] = React.useState(10);

  const progressRef = useRef(() => {});
  useEffect(() => {
    progressRef.current = () => {
      if (buffProgress > 100) {
        setBuffProgress(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setBuffProgress(buffProgress + diff);
        setBuffer(buffProgress + diff + diff2);
      }
    };
  }, [buffProgress]);

  useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <Stack width={'100%'} spacing={2}>
      <Box
        sx={{
          position: 'relative',
          display: 'inline-flex',
          width: 'fit-content',
        }}
      >
        <CircularProgress variant={'determinate'} value={buffProgress} />
        <Box
          sx={{
            textAlign: 'center',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant={'caption'} color={'text.secondary'}>
            {`${Math.round(buffProgress)}%`}
          </Typography>
        </Box>
      </Box>
      <LinearProgress
        variant={'determinate'}
        value={Math.round(buffProgress)}
        color={'secondary'}
      />
      <CircularProgress
        variant={'determinate'}
        value={Math.round(buffProgress)}
        color={'error'}
      />
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress
            variant={'buffer'}
            value={Math.round(buffProgress)}
            valueBuffer={buffer}
            color={'success'}
          />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant={'body2'} color={'text.secondary'}>{`${Math.round(
            buffProgress,
          )}%`}</Typography>
        </Box>
      </Box>
    </Stack>
  );
}
