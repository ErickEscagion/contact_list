import React from 'react';
import Button from '@material-ui/core/Button';
import { SnackbarProvider, useSnackbar } from 'notistack';

function MyApp() {
  const { enqueueSnackbar } = useSnackbar();


  const v1 = (variant) => () => {
    enqueueSnackbar('1!', { variant });
  };

  const v2 = (variant) => () => {
    enqueueSnackbar('2', { variant });
  };

  const v3 = (variant) => () => {
    enqueueSnackbar('3', { variant });
  };

  return (
    <React.Fragment>
        <Button onClick={v1('warning')}>1</Button>
        <Button onClick={v2('success')}>2</Button>
        <Button onClick={v3('error')}>3</Button>
    </React.Fragment>
  );
}

export default function IntegrationNotistack() {
  return (
    <SnackbarProvider maxSnack={3}>
      <MyApp />
    </SnackbarProvider>
  );
}