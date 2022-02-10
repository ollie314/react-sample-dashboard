import React from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Title from '../../components/Title';

import DocList from './DocList';

const ExchangeHistory = () => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Title>Exchange History</Title>
      </AccordionSummary>
      <AccordionDetails>
        <DocList />
      </AccordionDetails>
    </Accordion>
  );
};

export default ExchangeHistory;
