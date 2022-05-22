import React from 'react';
import Grid from '@mui/material/Grid';
import { useMediaQuery } from '@mui/material';
import Page from '../components/Page';
import RightSideNav from '../components/RightSideNav';
import DismissAlert from '../modules/Alerts/Dismissable';
import AlertColors from '../modules/Alerts/Colors';
import AdditionalContent from '../modules/Alerts/Content';
import AlertVariants from '../modules/Alerts/Variants';

function Alerts() {
  const smallScreen600 = useMediaQuery('max-width: 600px');

  return (
    <Grid container>
      <Grid item sm={12} md={10}>
        <Page>
          <h1 className={'display-4 fw-bold'}>Alerts</h1>
          <AlertColors id={'alertColors'} />
          <AlertVariants id={'alertVariants'} />
          <AdditionalContent id={'alertContent'} />
          <DismissAlert id={'alertDismiss'} />
        </Page>
      </Grid>
      <Grid item sm={0} md={2}>
        {!smallScreen600 && (
          <RightSideNav
            values={[
              'Colors & Icons',
              'Variants',
              'Additional Content',
              'Dismissable Alerts',
            ]}
            scrollRef={[
              '#alertColors',
              '#alertVariants',
              '#alertContent',
              '#alertDismiss',
            ]}
          />
        )}
      </Grid>
    </Grid>
  );
}

export default Alerts;
