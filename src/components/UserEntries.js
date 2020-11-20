import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import EntryModel from '../models/entry';
// import Entry from '../pages/Entry';


const UserEntries = (props) => {

  const [entries, setEntries] = useState([])
  

  useEffect(() => {
    EntryModel.all(props.match.auth.user)
      .then(data => setEntries(data.entries))
  }, [props.match.auth.user])

  

  return (
    <div>
      {entries.map((entry) => (
        <>
        <h3 key={entry.id}>{entry.title}</h3>
        <h5>By {entry.userId}</h5>
        <p>{`${entry.body.split(" ").splice(0, 50).join(" ")}...`}</p>
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
