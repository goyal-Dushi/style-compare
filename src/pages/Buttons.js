import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Page from '../components/Page';
import RightSideNav from '../components/RightSideNav';
import ButtonColors from '../modules/Buttons/Colors';
import ButtonDisabled from '../modules/Buttons/Disabled';
import ButtonSizeVariants from '../modules/Buttons/SizeVariants';
import WithIcons from '../modules/Buttons/WithIcons';
import { stylingSnippets } from '../themes/stylingSnippets';

export default function ButtonStyles() {
  useEffect(() => {
    stylingSnippets();
  });

  return (
    <Grid container>
      <Grid item sm={12} md={9}>
        <Page>
          <h1 className={'display-4 fw-bold'}>Buttons</h1>
          <ButtonColors id={'btnColors'} />
          <ButtonSizeVariants id={'btnSizeVariants'} />
          <ButtonDisabled id={'btnDisabled'} />
          <WithIcons id={'btnWithIcons'} />
        </Page>
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
