import React from 'react';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import Title from '../../components/Title';
import SearchBox from '../../components/SearchBox';
import ClientCard from './ClientCard';
import DocList from '../../components/DocList';
import ExchangeHistory from './ExchangeHistory';

const ClientDocs = () => {
  const client = {
    id: '81a824dc-e5e0-4e18-973c-d9a1fd318235',
    firstName: 'Lorraine',
    lastName: 'Simmons',
    avs: '756.2160.7092.21',
    phone: '+41-795-551-352',
    email: 'lorraine.simmons@bluewin.ch',
  };
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12} lg={12}>
          <ClientCard client={client} />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <SearchBox title="Search Docs" />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Title>Client Docs</Title>
            <DocList />
          </Paper>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <ExchangeHistory />
        </Grid>
      </Grid>
    </>
  );
};

export default ClientDocs;
