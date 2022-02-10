import React from 'react';

import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import ClientCard from '../ClientCard';

const ContentVerification = ({ client }) => {
  /*
  '2021-10-14 03:39:14',
    'Lorraine Simmons',
    'CHUV',
    'ebbd8bda-e751-400d-a866-56bd20591593.pdf',
    '12Mb',
    'success'
    */
  return (
    <Stack spacing={2}>
      <Typography variant="h6" gutterBottom component="div">
        Review client information
      </Typography>
      <ClientCard client={client} />
      <Typography variant="h6" gutterBottom component="div">
        Review content you are about to send
      </Typography>
    </Stack>
  );
};

export default ContentVerification;
