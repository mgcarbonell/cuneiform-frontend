import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import EntryModel from '../models/entry';
// import Entry from '../pages/Entry';


const EntryList = (props) => {

  const [entries, setEntries] = useState([])
  

  useEffect(() => {
    EntryModel.all()
      .then(data => setEntries(data.entries))
  }, [])

  

  return (
    <div>
      {entries.reverse().map((entry) => (
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
      ))}
    </div>
  )

}

export default EntryList;

// Show only public posts, so if isPublic === true => show post.
// if isPublic ? hide post : show post