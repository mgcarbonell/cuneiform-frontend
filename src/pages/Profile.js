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
<<<<<<< HEAD
  const classes = useStyles();
=======

  const [entries, setEntries] = useState([])

  useEffect(() => {
    EntryModel.user(props.currentUser)
      .then(data => setEntries(data.entries))
  }, [props.currentUser])
>>>>>>> submain

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