import React from 'react';
import { Link } from 'react-router-dom'
import { AppBar, Toolbar } from '@material-ui/core'
import { Button } from '@material-ui/core'

const Header = (props) => {
  return (
    <header>
      <AppBar position="static">
        <Toolbar>
          <div className="logo">
            <Link to={'/'}>Home</Link>
          </div>
          <div className="links">
              { props.currentUser ? 
                <>
                  <Link to={'/profile'}>
                    <Button color="inherit">
                      Profile
                    </Button>
                  </Link>
                  <a href="/logout" onClick={ props.logout }>Log Out</a>
                </>
              :
                <>
                  <Link to={'/register'}>Register</Link>
                  <Link to={'/login'}>Login</Link>
                </>
              }
          </div>
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
