import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Routes from './config/Routes';
import './App.css';
import UserModel from './models/user';
import { CssBaseline, Grid, Paper } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

function App() {
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('id'));
  const [currentUsername, setCurrentUsername] = useState(localStorage.getItem('username'));
  const [darkMode, setDarkMode] = useState(false);

  const font = "'Montserrat', sans-serif";

  const lightTheme = createMuiTheme({
    palette: {
      primary: {
        main: '#C6AB83',
        contrastText: '#000'
      },
      secondary: {
        light: '#fffafd',
        main: '#fff2f2',
        dark: '#ccbfbf',
        contrastText: '#000'
      },
      background: {
        default: '#fffaf0'
      },
    },
    typography: {
      fontFamily: font,
      fontSize: 13
    },
    paper: {
      backgroundColor: '#fffaf0',
    }
  })
  
  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#C4D8E7',
        contrastText: '#000'
      },
      secondary: {
        main: '#ff4400',
        constrastText: '000'
      }
    },
    typography: {
      fontFamily: font,
      fontSize: 13,
    }
  })

  const storeUser = (userId) => {
    localStorage.setItem('id', userId)
    setCurrentUser( userId )
  }

  const storeUsername = (username) => {
    localStorage.setItem('username', username)
    setCurrentUsername( username )
    console.log(username)
  }

  const logout = (event) => {
    event.preventDefault()

    localStorage.removeItem('id')
    localStorage.removeItem('username')

    UserModel.logout()
      .then(res => {
        setCurrentUser(null)
      })
  }

  return (
    <div className="App">
      <ThemeProvider 
        theme={ darkMode ? darkTheme : lightTheme } 
      >
        <CssBaseline />
        <Paper>
          <Navbar 
            currentUser={ currentUser } 
            currentUsername={ currentUsername } 
            logout={ logout }
            darkMode={ darkMode }
            setDarkMode={ setDarkMode }
          />
          <Grid style={{ padding: 20 }}>
            <Routes 
              currentUser={ currentUser }
              currentUsername={ currentUsername }
              storeUser={ storeUser }
              storeUsername={ storeUsername }
            />
          </Grid>
        </Paper>
        <Footer style={{ flex: 1, flexDirection: "row", justifyContent: "space-around" }}>
          <Link to={'/About'} style={{ padding: 5 }}>About</Link>
          <Link to={'/Contact'} style={{ padding: 5 }}>Contact</Link>
          <Link to={'/Help'} style={{ padding: 5 }}>Help</Link>
        </Footer>
      </ThemeProvider>
    </div>
  );
}

export default App 
