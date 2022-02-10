import React from 'react';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import ClientCard from '../ClientCard';
import ExchangePdfViewer from './ExchangePdfViewer';
import MetasList from './MetasList';
import Title from '../../../components/Title';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

// Fake information for now
const fakeExchange = {
  client: {
    id: '81a824dc-e5e0-4e18-973c-d9a1fd318235',
    firstName: 'Lorraine',
    lastName: 'Simmons',
    avs: '756.2160.7092.21',
    phone: '+41-795-551-352',
    email: 'lorraine.simmons@bluewin.ch',
  },
  metas: [
    {key: 'meta1', value: ''}
  ],
  doc: {
    id: '677680bb-9a20-4a26-912f-4a56b541c3e3',
    uri: 'https://journals.aps.org/prl/pdf/10.1103/PhysRevLett.13.508',
  }
}

const ExchangeReview = ({exchange = fakeExchange}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <Stack spacing={2}>
            <Title>Client information</Title>
            <ClientCard client={exchange.client} />
            <Title>Meta information</Title>
            <MetasList metas={exchange.metas} />
          </Stack>
        </Grid>
        <Grid item xs={7}>
          <Stack spacing={2}>
            <Title>Document information</Title>
            <ExchangePdfViewer url={exchange.doc.uri} />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ExchangeReview;
