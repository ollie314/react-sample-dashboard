import React from 'react';

import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';

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

const ucFirst = (s) => `${s.toUpperCase().charAt(0)}${s.slice(1)}`

const MetaItem = ({kind, content, index, name, editable}) => {
  return (
    <>
      {editable &&
        <Field
          fullWidth
          component={TextField}
          name={`${name}.${index}.${kind}`}
          type="text"
          value={content}
          label={ucFirst(kind)}
        />
      }
      {!editable &&
        <Item>{content}</Item>
      }
    </>
  );
};

const MetaEntry = ({
  index = 0,
  metaKey = '',
  metaValue = '',
  name = '',
  editable = false,
}) => {
  return (
    <>
      <Grid item xs={5} md={5}>
        <MetaItem kind="key" content={metaKey} index={index} name={name} editable={editable} />
      </Grid>
      <Grid item xs={6} md={6}>
        <MetaItem kind="value" content={metaValue} index={index} name={name} editable={editable} />
      </Grid>
      <Grid item xs={1} md={1}>
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </Grid>
    </>
  );
};

const MetaDefinition = ({ metas = [], editable = true }) => {
  const initialValues = [...metas];
  const onAddMeta = (values, setValues) => {
    const items = [...values];
    items.push({key: '', value: ''});
    setValues(items);
  }
  return (
    <>
      <Typography variant="h6" gutterBottom component="div">
        Fill Meta information.
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({errors, values, touched, setValues}) => (
          <Form>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Header />
                <FieldArray name="items">
                  {() => (
                    values.map((m, i) => (
                      <MetaEntry key={`${m.key}-${i}`} index={i} metaKey={m.key} metaValue={m.value} name="items" editable={editable} />
                    ))
                  )}
                </FieldArray>
            </Grid>
          </Box>
          {editable && (
            <IconButton aria-label="delete">
              <AddIcon onClick={() => onAddMeta(values, setValues)} />
            </IconButton>
          )}
          </Form>
          )}
        </Formik>
    </>
  );
};

export default MetaDefinition;
