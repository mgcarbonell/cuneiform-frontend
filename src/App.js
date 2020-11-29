import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Routes from './config/Routes'
import './App.css'
import UserModel from './models/user'
import { CssBaseline, Grid, Paper } from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

function App() {
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('id'));
  const [currentUsername, setCurrentUsername] = useState(localStorage.getItem('username'));
  const [darkMode, setDarkMode] = useState(false);

  const lightTheme = createMuiTheme({
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
  
  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
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
        <Paper style={{ height: "100vh" }}>
          <Header 
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
          <Footer />
        </Paper>
      </ThemeProvider>
    </div>
  );
}

export default App 
