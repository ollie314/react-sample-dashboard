import React from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';

import Title from '../../components/Title';
import SearchBox from '../../components/SearchBox';
import ClientList from './ClientList';

const Clients = () => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12} lg={12}>
          <SearchBox title="Search clients" />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Title>Results</Title>
            <ClientList />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Clients;
