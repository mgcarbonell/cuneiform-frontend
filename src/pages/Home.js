import React from 'react';
import { Link } from 'react-router-dom';
import { Button, makeStyles } from '@material-ui/core';
import EntryList from '../components/EntryList';

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

const Home = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <EntryList />
    { props.currentUser ?
    <>
      <Link to={'/NewEntryForm'}>
        <Button color="primary" variant="contained">
          New Entry
        </Button>
      </Link>
    </>
    :
    <>
      <Link to={'/Entry'}>
        <Button color="primary" variant="contained">
          Public Entries
        </Button>
      </Link>
    </>
    }
    </div>
  )
}

export default Home;
