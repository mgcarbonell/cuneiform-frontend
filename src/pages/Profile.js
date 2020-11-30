import React from 'react';
import UserEntries from '../components/UserEntries';
import { makeStyles } from '@material-ui/core';

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
  return (
    <>
      <h1>Profile of { props.currentUsername }</h1>
      <UserEntries
        currentUser={ props.currentUser }         
      />
    </>
  )
}

export default Profile;