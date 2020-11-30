import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography } from '@material-ui/core';
import EntryModel from '../models/entry';

const UserEntries = (props) => {
  const [entries, setEntries] = useState([])
  

  useEffect(() => {
    EntryModel.user(props.currentUser)
      .then(data => setEntries(data.entries))
  }, [props.currentUser])

  return (
    <div>
      {entries.map((entry) => (
        <>
        <Typography component="h3" variant="h6" key={entry.id}>
          {entry.title}
        </Typography>
        <Typography component="h5" variant="body1" key={entry.userId}>
          By {entry.userId}
        </Typography>
        <Typography compoment="p" variant="body1" key={entry.body}>
          {entry.body}
        </Typography>
        <Link to={`/entry/${entry.id}`}>
          <Button color="primary" variant="contained">
            Read more
          </Button>
        </Link>
        </>
      ))}
    </div>
  )

}

export default UserEntries;
