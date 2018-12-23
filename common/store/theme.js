import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';

const old_theme = createMuiTheme({
    palette: {
      type: 'light',
      primary: { main: "#303f9f" }
    },

    typography: {
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        "Ubuntu",
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    }
});

const theme = createMuiTheme({
    palette: {
      type: 'light',
      primary: {
        light: '#69696a',
        main: '#28282a',
        dark: '#1e1e1f',
      },
      secondary: {
        light: '#fff5f8',
        main: '#ff3366',
        dark: '#330e62',
      },
      warning: {
        main: '#ffc071',
        dark: '#ffb25e',
      },
      error: {
        xLight: red[50],
        main: red[500],
        dark: red[700],
      },
      success: {
        xLight: green[50],
        dark: green[700],
      },
    },
    typography: {
      fontFamily: "Ubuntu",
      fontSize: 14,
      fontWeightLight: 300, // Work Sans
      fontWeightRegular: 400, // Work Sans
      fontWeightMedium: 700, // Roboto Condensed
      fontFamilySecondary: "'Roboto Condensed', sans-serif",
      useNextVariants: true,
    }
  });


export default theme;