import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { AppBar, Toolbar } from '@material-ui/core'
import { Button } from '@material-ui/core'
import NewEntryDialog from './NewEntryDialog';
import NewEntryForm from './NewEntryForm'


const Navbar = (props) => {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <header>
      <AppBar position="static">
        <Toolbar>
            <Link to={'/'}>
              <Button>
                Home
              </Button>
            </Link>
            {/* 22-55 conditional rendering based on logged in user */}
              { props.currentUser ? 
                <>
                  <Link to={'/profile'}>
                    <Button aria-label="profile">
                      Profile
                    </Button>
                  </Link>
                  <Link to={'/logout'}>
                    <Button onClick={ props.logout } aria-label="logout">
                      Logout
                    </Button>
                  </Link>
                    <Button 
                      color="primary" 
                      variant="contained"
                      onClick={() => setOpenDialog(true)}
                      aria-label="create a new entry"
                    >
                      New Entry
                    </Button>
                </>
              :
                <>
                  <Link to={'/register'} aria-label="register">
                    <Button>
                      Register
                    </Button>
                  </Link>
                  <Link to={'/login'} aria-label="login">
                    <Button>
                      Login
                    </Button>
                  </Link>
                </>
              }
        </Toolbar>
      </AppBar>
      <NewEntryDialog
        title={'New Entry'}
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
      >
        <NewEntryForm>
        </NewEntryForm>
      </NewEntryDialog>
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
  

export default Navbar;
