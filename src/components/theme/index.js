import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  props: {
    MuiAppBar: {
      elevation: 0,
    },
    MuiButton: {
      disableElevation: true,
    },
    MuiButtonBase: {
      disableRipple: true,
    },
    MuiContainer: {
      maxWidth: 'lg',
    },
    MuiTab: {
      disableFocusRipple: true,
      disableRipple: true,
    },
    MuiTypography: {
      component: 'div',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 492,
      md: 768,
      lg: 1020,
      xl: 1380,
    },
  },
  palette: {
    primary: {
      light: '#2691de',
      main: '#1b75b6',
    },
    background: {
      default: '#EDEDED',
    },
    text: {
      primary: '#2E353F',
    },
    appBar: {
      background: '#293F54',
      text: '#fff',
    },
  },
  typography: {
    // NOTE: "HelveticaNeue" does not support weights (light, medium); use "Helvetica Neue" instead.
    fontFamily: '"Helvetica Neue", Helvetica, Arial, Roboto, sans-serif',
    //
    // Font scale: Minor third (1.200)
    //
    fontSize: 16,
    h1: {
      fontSize: '2.488rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2.074rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.728rem',
      fontWeight: 400,
    },
    h4: {
      fontSize: '1.44rem',
      fontWeight: 400,
    },
    h5: {
      fontSize: '1.2em',
      fontWeight: 500,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
    },
    button: {
      textTransform: 'initial',
    },
  },
});
