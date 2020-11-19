import { Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const Home = () => {
  return (
    <div /* className="App" */>
      <Button color="primary" variant="contained">
        New Entry
      </Button>
    </div>
  )
}

export default Home;
