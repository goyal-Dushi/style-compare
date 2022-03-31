import React from 'react';
import Grid from '@mui/material/Grid';
import RightSideNav from '../components/RightSideNav';
import ButtonColors from '../modules/Buttons/Colors';
import ButtonDisabled from '../modules/Buttons/Disabled';
import ButtonSizeVariants from '../modules/Buttons/SizeVariants';
import WithIcons from '../modules/Buttons/WithIcons';

export default function ButtonStyles() {
  return (
    <Grid container>
      <Grid item sm={12} md={9}>
        <div
          className={'w-75 position-relative mx-auto mb-5'}
          data-bs-spy={'scroll'}
          data-bs-target={'#rightNav'}
        >
          <h1 className={'display-4 fw-bold'}>Buttons</h1>
          <ButtonColors id={'btnColors'} />
          <ButtonSizeVariants id={'btnSizeVariants'} />
          <ButtonDisabled id={'btnDisabled'} />
          <WithIcons id={'btnWithIcons'} />
        </div>
      </Grid>
      <Grid item sm={0} md={3}>
        <RightSideNav
          values={['Colors', 'Size & Variants', 'Disabled', 'Icons']}
          scrollRef={[
            '#btnColors',
            '#btnSizeVariants',
            '#btnDisabled',
            '#btnWithIcons',
          ]}
        />
      </Grid>
    </Grid>
  );
}
