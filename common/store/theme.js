import { createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';


const theme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: { main: "#303f9f" }
    },

    typography: {
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        "Spectral",
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


export default theme;