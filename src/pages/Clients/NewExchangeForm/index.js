import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import ExchangeCompleted from './ExchangeCompleted';
import ExchangeReview from './ExchangeReview';
import ContentVerification from './ContentVerification';
import MetaDefinition from './MetaDefinition';

const steps = ['Verify Cotnent', 'Fill meta', 'Review your exchange', 'Done'];

const NewExchangeForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();

  // TODO: client will be passed as parameter or through a store
  const client = {
    id: '81a824dc-e5e0-4e18-973c-d9a1fd318235',
    firstName: 'Lorraine',
    lastName: 'Simmons',
    avs: '756.2160.7092.21',
    phone: '+41-795-551-352',
    email: 'lorraine.simmons@bluewin.ch',
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <ContentVerification client={client} />;
      case 1:
        return <MetaDefinition />;
      case 2:
        return <ExchangeReview />;
      case 3:
        return <ExchangeCompleted />;
      default:
        throw new Error('Unknown step');
    }
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleQuit = () => {
    // TODO: use the real client information
    navigate('/clients/e11c7b09-4192-42bb-b5d6-03686f8f150a/docs');
  };

  return (
    <Paper
      variant="outlined"
      sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
    >
      <Typography component="h1" variant="h4" align="center">
        Create new Exchange
      </Typography>
      <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <React.Fragment>
        {activeStep === steps.length - 1 ? (
          <ExchangeCompleted />
        ) : (
          <React.Fragment>
            {getStepContent(activeStep)}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              {activeStep !== 0 && (
                <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                  Back
                </Button>
              )}
              {activeStep === 0 && (
                <Button onClick={handleQuit} sx={{ mt: 3, ml: 1 }}>
                  Cancel
                </Button>
              )}
              <Button
                variant="contained"
                onClick={handleNext}
                sx={{ mt: 3, ml: 1 }}
              >
                {activeStep === steps.length - 2 ? 'Send' : 'Next'}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </React.Fragment>
    </Paper>
  );
};

export default NewExchangeForm;
