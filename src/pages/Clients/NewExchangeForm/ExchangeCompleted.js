import React from 'react';
import { useNavigate } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const ExchangeCompleted = () => {
  const navigate = useNavigate();
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Your exchange will be processed soon!
      </Typography>
      <Typography variant="subtitle1">
        You will receive an email to inform you right after the processing.
      </Typography>
      <Button
        onClick={() => {
          // TODO: fix the navigate uuid using props
          navigate('/clients/e11c7b09-4192-42bb-b5d6-03686f8f150a/docs');
        }}
      >
        Back to list
      </Button>
    </>
  );
};

export default ExchangeCompleted;
