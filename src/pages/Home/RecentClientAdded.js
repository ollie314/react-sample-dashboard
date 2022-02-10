import * as React from 'react';

import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import Title from '../../components/Title';

function preventDefault(event) {
  event.preventDefault();
}

const RecentClientAdded = () => {
  return (
    <>
      <Title>Recent Clients added</Title>
      <Typography component="p" variant="h4">
        John Doe
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 03 Feb, 2022 by Jane
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View Detail
        </Link>
      </div>
    </>
  );
};

export default RecentClientAdded;
