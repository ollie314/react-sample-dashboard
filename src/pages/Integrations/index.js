import React from 'react';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import Title from '../../components/Title';

import IntegrationDiagram from './IntegrationDiagram';

const Integrations = () => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12} lg={12}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Title>Integrations</Title>
            <IntegrationDiagram />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Integrations;
