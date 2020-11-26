import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import EntryModel from '../models/entry';
// import Entry from '../pages/Entry';


const UserEntries = (props) => {
  const [entries, setEntries] = useState([])
  

  useEffect(() => {
    EntryModel.user(props.currentUser)
      .then(data => setEntries(data.entries))
  }, [])

  return (
    <div>
      {entries.map((entry) => (
        <>
        <h3 key={entry.id}>{entry.title}</h3>
        <h5>By {entry.userId}</h5>
        <p>{entry.body}</p>
        <Link to={`/entry/${entry.id}`}>
          <Button color="primary" variant="contained">
            Read more
          </Button>
        </Link>
        </>
      )).reverse()}
    </div>
  )

}

export default UserEntries;
