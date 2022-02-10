import React, { useState } from 'react';

import Paper from '@mui/material/Paper';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Title from '../../components/Title';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const CronSettings = () => {
  const [verbosity, setVerbosity] = useState(30);
  const handleVerbosityChange = (e) => {
    setVerbosity(e.target.value);
  };
  
  return (
    <Paper
      sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Title>Cron Settings</Title>
      <Grid container spacing={2}>
        <Grid item xs={2} md={2} lg={2}>
          Activate Cron: 
        </Grid>
        <Grid item xs={10} md={10} lg={10}>
          <Switch {...label} defaultChecked />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <FormControl fullWidth>
            <InputLabel id="verbosity-select-label">Verbosity</InputLabel>
            <Select
              labelId="verbosity-select-label"
              id="verbosity-select"
              value={verbosity}
              label="Verbosity"
              onChange={handleVerbosityChange}
            >
              <MenuItem value={0}>Silent</MenuItem>
              <MenuItem value={10}>Error</MenuItem>
              <MenuItem value={20}>Warning</MenuItem>
              <MenuItem value={30}>Info</MenuItem>
              <MenuItem value={40}>Debug</MenuItem>
              <MenuItem value={50}>Trace</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <TextField id="cron-expression" label="Cron Expression" variant="standard" fullWidth value="* 1 * * * *" disabled />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CronSettings;
