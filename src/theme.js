import { createMuiTheme } from '@material-ui/core/styles';
// import { useTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#d7f9f1',
      main: '#b2edf2',
      dark: '#C1B4B6',
      contrastText: '#000',
    },
    secondary: {
      light: '#fffafd',
      main: '#fff2f2',
      dark: '#ccbfbf',
      contrastText: "#000",
    },
    paper: {
      main: '#fbf4ec',

    }
  }
})

export default theme;