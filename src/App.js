import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Routes from './config/Routes'
import './App.css'
import UserModel from './models/user'

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
    // localStorage.removeItem('id')

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
      <Routes 
        currentUser={ currentUser }
        currentUsername={ currentUsername }
        storeUser={ storeUser }
        storeUsername={ storeUsername }
      />
      <Footer />
    </div>
  );
}

export default App 
