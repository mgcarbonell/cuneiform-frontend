import { Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import EntryList from '../components/EntryList';

const Home = (props) => {
  return (
    <>
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
    </>
  )
}

export default Home;
