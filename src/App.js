import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import UserEntries from './components/UserEntries'
import Routes from './config/Routes'
import './App.css'
import UserModel from './models/user'
import { Grid } from '@material-ui/core'

function App() {
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('id'))
  const [currentUsername, setCurrentUsername] = useState(localStorage.getItem('username'))

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
      <Header 
        currentUser={ currentUser } 
        currentUsername={ currentUsername } 
        logout={ logout }
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
    </div>
  );
}

export default App 
