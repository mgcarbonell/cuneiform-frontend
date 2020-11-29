import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NewEntryDialog from './NewEntryDialog';
import NewEntryForm from './NewEntryForm';
import { AppBar, Toolbar, Button, IconButton, MenuItem, Menu } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
              <Button>
                Home
              </Button>
            </Link>
              { props.currentUser ? 
                <>
                  <Button 
                    color="primary" 
                    variant="contained"
                    onClick={() => setOpenDialog(true)}
                    aria-label="create a new entry"
                  >
                    New Entry
                  </Button>
                  <IconButton
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
                      verticle: 'top',
                      horizontal: 'right'
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
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
        <NewEntryForm
          setOpenDialog={setOpenDialog}
        />
      </NewEntryDialog>
    </div>
  );
}

export default Navbar;
