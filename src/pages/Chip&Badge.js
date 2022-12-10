import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Page from '../components/Page';
import RightSideNav from '../components/RightSideNav';
import AlignmentContent from '../modules/Chips&Badges/Badges/Align&Content';
import ColorsSizes from '../modules/Chips&Badges/Chips/ColorSize';
import IconChips from '../modules/Chips&Badges/Chips/IconChips';
import { stylingSnippets } from '../themes/stylingSnippets';

export default function ChipBadge() {
  useEffect(() => {
    stylingSnippets();
  });

  return (
    <Grid container>
      <Grid item sm={12} md={9}>
        <Page>
          <h2 className={'display-5 fw-bold mt-3'}>
            <u>Chips</u>
          </h2>
          <ColorsSizes id={'chipColorSizes'} />
          <IconChips id={'chipIcons'} />
          <h2 className={'display-5 fw-bold mt-3'}>
            <u>Badges</u>
          </h2>
          <AlignmentContent id={'badgeAlignment'} />
        </Page>
      </Grid>
      <Grid item sm={0} md={3}>
        <RightSideNav
          values={[
            'Colors & Sizes',
            'Icon Chips',
            'Alignment and content in Badges',
          ]}
          scrollRef={['#chipColorSizes', '#chipIcons', '#badgeAlignment']}
        />
      </Grid>
    </Grid>
  );
}
