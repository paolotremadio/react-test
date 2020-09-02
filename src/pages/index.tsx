/* eslint no-restricted-globals: 0 */
/* global location */
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import {
  AppBar, Box, Button, Container, Grid, Paper, Toolbar, Typography,
} from '@material-ui/core';

import { DemoForm } from '@/components/DemoForm';
import { withApollo } from '@/graphql';

const query = gql`
  query reactTestGetDataset {
    result: dataset {
      value
    }
  }
`;

interface IDatasetResults {
  value: string
}

interface IDataset {
  result: IDatasetResults
}

const Index = () => {
  const { loading, error, data } = useQuery<IDataset>(query);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const initialValue = data?.result?.value || '';

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Container>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md>
                <Typography variant="h4">Demo app</Typography>
              </Grid>
              <Grid item xs={12} md="auto">
                <Button
                  variant="outlined"
                  color="inherit"
                  onClick={() => location.reload()}
                >
                  Reload
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
      <Container>
        <Box paddingY={2}>
          <Paper>
            <Box padding={2}>
              <DemoForm initialValue={initialValue} />
            </Box>
          </Paper>
        </Box>
      </Container>
    </>
  );
};

export default withApollo(Index);
