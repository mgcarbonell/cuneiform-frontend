import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, Card } from '@material-ui/core';
import EntryModel from '../models/entry';

const EntryList = (props) => {

  const [entries, setEntries] = useState([])
  

  useEffect(() => {
    EntryModel.all()
      .then(data => setEntries(data.entries))
  }, [])

  

  return (
    <>
      {entries.map((entry) => (
        <Grid>
          <Card 
          elevation={3} 
          style={{
          padding: 10,
          paddingBottom: 20
          }}
          >
            <Typography component="h3" variant="h6" key={entry.id}>
              {entry.title}
            </Typography>
            <Typography component="h5" variant="h6" key={entry.userId}>
              By {entry.userId}
            </Typography>
            <Divider variant="middle" />
            <Typography component="p" variant="body1" style={{ textAlign: "justify" }}>
              {entry.body.split(' ').splice(0, 100).join(' ')}...
            </Typography>
            <Link to={`/entry/${entry.id}`}>
              <Button color="primary" variant="contained">
                Read more
              </Button>
            </Link>
          </Card>
        </Grid>
      ))}
    </>
  )

}

export default EntryList;