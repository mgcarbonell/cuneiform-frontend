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
                    <Button 
                      color="primary" 
                      variant="contained"
                      onClick={() => setOpenDialog(true)}
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
      <NewEntryDialog
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
