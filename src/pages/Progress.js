import React from 'react';
import Grid from '@mui/material/Grid';
import Page from '../components/Page';
import TypesColors from '../modules/Progress/TypesColors';
import RightSideNav from '../components/RightSideNav';
import AnimationLabels from '../modules/Progress/AnimationLabels';

export default function Progress() {
  return (
    <Grid container>
      <Grid item sm={12} md={9}>
        <Page>
          <h1 className={'display-4 fw-bold'}>Progress</h1>
          <TypesColors id={'typesColor'} />
          <AnimationLabels id={'animationLables'} />
        </Page>
      </Grid>
      <Grid item sm={0} md={3}>
        <RightSideNav
          values={['Types & Colors', 'Animation & Labels']}
          scrollRef={['#typesColor', '#animationLabels']}
        />
      </Grid>
    </Grid>
  );
}
