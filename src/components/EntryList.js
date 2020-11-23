import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, Paper } from '@material-ui/core';
import EntryModel from '../models/entry';
// import Entry from '../pages/Entry';

const EntryList = (props) => {

  const [entries, setEntries] = useState([])
  

  useEffect(() => {
    EntryModel.all()
      .then(data => setEntries(data.entries))
  }, [])

  

  return (
    <>
      {entries.map((entry) => (
        <Grid
        style={{ padding: 20 }}
        >
          <Paper 
          elevation={3} 
          style={{
          padding: 10,
          paddingBottom: 20
          }}
          >
            <h3 key={entry.id}>{entry.title}</h3>
            <h5>By {entry.userId}</h5>
            <p>{entry.body}</p>
            <Link to={`/entry/${entry.id}`}>
              <Button color="primary" variant="contained">
                Read more
              </Button>
            </Link>
          </Paper>
        </Grid>
      )).reverse()}
    </>
  )

}

export default EntryList;