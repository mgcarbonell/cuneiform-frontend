import React, { useState, useEffect } from 'react';
import EntryModel from '../models/entry';
import UserEntries from '../components/UserEntries';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexDirection: 'column',
    wordWrap: 'break-word',
    justifyItems: 'center',
    flexGrow: 1,
    '& > *': {
      margin: theme.spacing(.3),
    },
  },
}))


const Profile = props => {
  const classes = useStyles();

  return (
    <Grid className={ classes.root }>
      <h1>Profile of { props.currentUsername }</h1>
      <UserEntries
        currentUser={ props.currentUser }         
      />
    </Grid>
  )
}

export default Profile;