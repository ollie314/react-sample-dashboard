import React from 'react';

import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import * as yup from 'yup';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const HeaderTitle = ({ title }) => {
  return (
    <Typography variant="subtitle1" gutterBottom component="div">
      {title}
    </Typography>
  );
};

const Header = () => {
  return (
    <>
      <Grid item xs={6} md={6}>
        <HeaderTitle title="Key" />
      </Grid>
      <Grid item xs={6} md={6}>
        <Typography variant="h6" gutterBottom component="div">
          <HeaderTitle title="Value" />
        </Typography>
      </Grid>
    </>
  );
};

const validationSchema = yup.object().shape({
  items: yup.array().of(
    yup.object().shape({
      key: yup.string().required('The key is required'),
      value: yup.string().required('The value must be defined'),
    })
  ),
});

const MetaEntry = ({
  metaKey = '',
  metaValue = '',
  setMetaKey = () => {},
  setMetaValue = () => {},
  editable = false,
}) => {
  return (
    <>
      <Grid item xs={6} md={6}>
        <Item>{metaKey}</Item>
      </Grid>
      <Grid item xs={6} md={6}>
        <Item>{metaValue}</Item>
      </Grid>
    </>
  );
};

const MetaDefinition = ({ metas = [], editable = true }) => {
  const initialValues = [...metas];
  return (
    <>
      <Typography variant="h6" gutterBottom component="div">
        Fill Meta information.
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Header />
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
          >
            {initialValues.map((m) => (
              <MetaEntry key={m.key} metaKey={m.key} metaValue={m.value} />
            ))}
          </Formik>
        </Grid>
      </Box>
      {editable && (
        <IconButton aria-label="delete">
          <AddIcon />
        </IconButton>
      )}
    </>
  );
};

export default MetaDefinition;
