import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NewEntryDialog from './NewEntryDialog';
import NewEntryForm from './NewEntryForm';
import { 
              AppBar, 
              Toolbar, 
              Button, 
              IconButton, 
              MenuItem, 
              Menu,
              Switch, 
              Grid } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle'
import Brightness7Icon from '@material-ui/icons/Brightness7'
import Brightness4Icon from '@material-ui/icons/Brightness4'
import { makeStyles } from '@material-ui/core/styles';
import logo from '../assets/an.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  homeButton: {
    marginRight: '1rem',
  },
  profileButton: {
    marginLeft: '1rem'
  },
  newEntryButton: {
    marginRight: '1rem'
  },

}));

const Navbar = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const open = Boolean(anchorEl);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null)
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
            <Link to={'/'}>
              <Button className={classes.homeButton}>
                <img src={logo} alt="cuneiform logo of the cuneiform symbol An" style={{ width: 36, height: 36 }}/>
              </Button>
            </Link>
            <Grid
              component="label"
              container
              alignItems="center"
              spacing={2}
            >
              <Grid item>
                <Brightness7Icon fontSize="small"/>
              </Grid>
              <Grid item>
                <Switch size="small" 
                  checked={props.darkMode}
                  onChange={() => props.setDarkMode(!props.darkMode)} 
                />
              </Grid>
              <Grid item>
                <Brightness4Icon 
                  fontSize="small"
                />
              </Grid>
            </Grid>
            <Grid
              container
              direction="row-reverse"
              justify="flex-start"
              alignItems="center"
            >
              { props.currentUser ? 
                <>
                  <IconButton
                    className={classes.profileButton}
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                    >
                      <AccountCircle />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      horizontal: 'right'
                    }}
                    keepMounted
                    transformOrigin={{
                      horizontal: 'right',
                    }}
                    open={open}
                    onClose={handleClose}
                  >
                    <MenuItem component={ Link } to={'/profile'} onClick={handleClose}>
                      Profile
                    </MenuItem>
                    <MenuItem component={ Link } to={'/logout'} onClick={handleClose, props.logout}>
                      Logout
                    </MenuItem>
                  </Menu>
                  <Button 
                    className={classes.newEntryButton}
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
          </Grid>
        </Toolbar>
      </AppBar>
      <NewEntryDialog
        title={'New Entry'}
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
      >
        <NewEntryForm setOpenDialog={setOpenDialog}/>
      </NewEntryDialog>
    </div>
  );
}

export default Navbar;