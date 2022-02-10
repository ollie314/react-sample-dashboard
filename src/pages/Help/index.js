import React from 'react';

import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import Title from '../../components/Title';

const Help = () => {
  return (
    <>
      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12} md={12} lg={12}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Title>Help</Title>
            <Alert severity="info">We will work on the help soon!</Alert>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Help;
