import React from 'react';

import Grid from '@mui/material/Grid';

import CronSettings from './CronSettings';
import GeneralSettings from './GeneralSettings';
import ServicesSettings from './ServicesSettings';

const Settings = () => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12} lg={12}>
          <GeneralSettings />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <CronSettings />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <ServicesSettings />
        </Grid>
      </Grid>
    </>
  );
};

export default Settings;
