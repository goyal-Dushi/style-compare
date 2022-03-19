import React, { useState, useEffect, useRef } from 'react';
import { Stack } from '@mui/material';
import * as Boot from 'react-bootstrap';

export default function BootstrapProgAnimationLable() {
  const [buffProgress, setBuffProgress] = useState(0);

  const progressRef = useRef(() => {});
  useEffect(() => {
    progressRef.current = () => {
      if (buffProgress > 100) {
        setBuffProgress(0);
      } else {
        const diff = Math.random() * 10;
        setBuffProgress(buffProgress + diff);
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
      <Boot.ProgressBar
        label={`${Math.round(buffProgress)}%`}
        striped
        variant={'info'}
        now={Math.round(buffProgress)}
      />
      <Boot.ProgressBar
        animated
        label={`${Math.round(buffProgress)}%`}
        variant={'danger'}
        now={Math.round(buffProgress)}
      />
      <Boot.ProgressBar>
        <Boot.ProgressBar striped variant={'success'} now={35} key={1} />
        <Boot.ProgressBar variant={'warning'} now={10} key={2} />
        <Boot.ProgressBar animated variant={'danger'} now={10} key={3} />
      </Boot.ProgressBar>
    </Stack>
  );
}
