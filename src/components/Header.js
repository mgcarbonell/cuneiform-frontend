import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { AppBar, Toolbar } from '@material-ui/core'
import { Button } from '@material-ui/core'
import NewEntryModal from './NewEntryModal'

const Header = (props) => {

  const [showModal, setShowModal] = useState(false)

  return (
    <header>
      <AppBar position="static">
        <Toolbar>
            <Link to={'/'}>
              <Button>
                Home
              </Button>
            </Link>
              { props.currentUser ? 
                <>
                  <Link to={'/profile'}>
                    <Button>
                      Profile
                    </Button>
                  </Link>
                  <Link to={'/logout'}>
                    <Button onClick={ props.logout }>
                      Logout
                    </Button>
                  </Link>
                    {/* <Button color="primary" variant="contained" onClick> */}
                  <NewEntryModal showModal={showModal} setShowModal={setShowModal}/>
                    <Button 
                      color="primary" 
                      variant="contained" 
                      onClick={() => setShowModal(!showModal)}
                    >         
                      New Entry
                    </Button>
                </>
              :
                <>
                  <Link to={'/register'}>
                    <Button>
                  Register
                    </Button>
                  </Link>
                  <Link to={'/login'}>
                    <Button>
                      Login
                    </Button>
                  </Link>
                </>
              }
        </Toolbar>
      </AppBar>
    </header>
  );
}


  
    // <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
    //   <MenuIcon />
    // </IconButton>
    // <Typography variant="h6" className={classes.title}>
    //   News
    // </Typography>
    // <Button color="inherit">Login</Button>
  

export default Header;
