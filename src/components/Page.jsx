import React from 'react';
import { styled } from '@mui/material';

const PageWrapper = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(10),
}));

function Page(props) {
  const { children } = props;
  return <PageWrapper className={'w-auto px-5 pb-5'}>{children}</PageWrapper>;
}

export default Page;
