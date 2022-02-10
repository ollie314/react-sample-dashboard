import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';

import Title from '../../components/Title';

const firstUp = (s) => s.toUpperCase().charAt(0);
const getAvatarContent = (firstName, lastName) =>
  `${firstUp(firstName)}${firstUp(lastName)}`;

const ClientCard = ({ client = {} }) => {
  return (
    <Card
      sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardHeader
        avatar={
          <Avatar>{getAvatarContent(client.firstName, client.lastName)}</Avatar>
        }
        title={`${client.firstName} ${client.lastName}`}
        subheader={`${client.avs}`}
      />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              disabled
              value={client.email}
              id="email"
              name="email"
              label="Email"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              disabled
              value={client.phone}
              id="phone"
              name="phone"
              label="Phone"
              fullWidth
              variant="standard"
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ClientCard;

ClientCard.defaultProps = {
  cliend: {},
};

ClientCard.propTypes = {
  client: PropTypes.shape({
    id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    avs: PropTypes.string.isRequired,
  }).isRequired,
};
