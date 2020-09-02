import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import {
  Box, Divider, Button,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import { ValueDisplay } from '@/components/ValueDisplay';

const FieldContainer = withStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(2.5),
  },
}))(Box);

export const DemoForm = ({ initialValue }) => {
  const [submittedValue, setSubmittedValue] = useState(initialValue);

  return (
    <Formik
      initialValues={{
        value: initialValue,
      }}
      onSubmit={(values, actions) => {
        setSubmittedValue(values.value);
        actions.setSubmitting(false);
      }}
    >
      {({
        submitForm, isSubmitting,
      }) => (
        <Form>
          <FieldContainer>
            <Field
              name="value"
              component={TextField}
              label="Type a value"
              variant="outlined"
              size="medium"
              inputProps={{ 'data-testid': 'input' }}
              fullWidth
            />
          </FieldContainer>
          <FieldContainer>
            <ValueDisplay value={submittedValue} />
          </FieldContainer>
          <Divider />
          <Box paddingTop={2}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              data-testid="button"
              disabled={isSubmitting}
              onClick={submitForm}
            >
              Submit
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

DemoForm.propTypes = {
  initialValue: PropTypes.string.isRequired,
};
