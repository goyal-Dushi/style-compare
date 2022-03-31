import React from 'react';
import Grid from '@mui/material/Grid';
import RightSideNav from '../components/RightSideNav';
import AlignmentContent from '../modules/Chips&Badges/Badges/Align&Content';
import ColorsSizes from '../modules/Chips&Badges/Chips/ColorSize';
import IconChips from '../modules/Chips&Badges/Chips/IconChips';

export default function ChipBadge() {
  return (
    <Grid container>
      <Grid item sm={12} md={9}>
        <div className={'w-75 mx-auto'}>
          <h2 className={'display-5 fw-bold mt-3'}>
            <u>Chips</u>
          </h2>
          <ColorsSizes id={'chipColorSizes'} />
          <IconChips id={'chipIcons'} />
          <h2 className={'display-5 fw-bold mt-3'}>
            <u>Badges</u>
          </h2>
          <AlignmentContent id={'badgeAlignment'} />
        </div>
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
