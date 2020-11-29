import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Button, Grid, Toolbar } from '@material-ui/core';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Switch from '@material-ui/core/Switch';

const Header = (props) => {
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
              <Link to={'/NewEntry'}>
                <Button color="primary" variant="contained">
                  New Entry
                </Button>
              </Link>
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
              <Grid
                component="label"
                container
                alignItems="center"
                spacing={2}
              >
                <Grid item>
                  <Brightness7Icon 
                    fontSize="small"
                  />
                </Grid>
                <Grid item>
                  <Switch size="small" checked={props.darkMode} onChange={() => props.setDarkMode(!props.darkMode)} />
                </Grid>
                <Grid item>
                  <Brightness4Icon 
                    fontSize="small"
                  />
                </Grid>
              </Grid>
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
