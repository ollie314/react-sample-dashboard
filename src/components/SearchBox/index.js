import React from 'react';

import Paper from '@mui/material/Paper';

import Title from '../../components/Title';
import SearchInput from '../../components/SearchInput';

const SearchBox = ({ title }) => {
  return (
    <Paper
      sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Title>{title}</Title>
      <SearchInput />
    </Paper>
  );
};

export default SearchBox;
