import React from 'react';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import Title from '../../components/Title';

import ExchangesRepartition from './ExchangesRepartition';
import RateInfoChart from './RateInfoChart';

const Reports = () => {
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={4} md={4} lg={4}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 400,
            }}
          >
            <Title>Reception Rate</Title>
            <RateInfoChart />
          </Paper>
        </Grid>
        <Grid item xs={4} md={4} lg={4}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 400,
            }}
          >
            <Title>Emission Rate</Title>
            <RateInfoChart />
          </Paper>
        </Grid>
        <Grid item xs={4} md={4} lg={4}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 400,
            }}
          >
            <Title>Error Rate</Title>
            <RateInfoChart />
          </Paper>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 400,
            }}
          >
            <Title>Transfert type repartition for emission</Title>
            <ExchangesRepartition />
          </Paper>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 400,
            }}
          >
            <Title>Transfert type repartition for reception</Title>
            <ExchangesRepartition />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Reports;
