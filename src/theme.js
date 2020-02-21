import { green } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: green[800],
            dark: green[900]
        },
        secondary: {
            main: green[300],
        },
        error: {
            main: green.A400,
        },
        background: {
            default: '#fff',
        },
    },
    typography: {
        h1: {
            color: "#634833"
        },
        h5: {
            color: "#634833"
        },
        h6: {
            color: "#634833"
        }
    }
});

export default theme;