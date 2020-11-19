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
      <Link to={'/NewEntry'}>
        <Button color="primary" variant="contained">
          New Entry
        </Button>
      </Link>
    </>
      :
    <>
      <Button color="primary" variant="contained" disabled>
          New Entry
        </Button>
    {console.log(props)}
    </>
    }
    </>
  )
}

export default Home;
