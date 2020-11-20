import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import EntryModel from '../models/entry';
// import comments from comments
// import material styling from @material-ui

const ShowEntry = (props) => {

  const [entry, setEntry] = useState([]);
  

  useEffect(() => {
    EntryModel.show(props.match.params.id)
      .then(data => setEntry(data.entry))
  }, [props.match.params.id])


  return (
    <>
        <div>
          <h3>{entry.title}</h3>
          <h5>{entry.userId}</h5>
          <p>{entry.body}</p>
        </div>
        <div>
          <p>Insert Comments Component Here</p>
        </div>
        <Link to={'/'}>
          <Button color="primary" variant="contained">
            Back to all public entries
          </Button>
        </Link>
    </>
  );
}

export default ShowEntry;

// In order for a user to delete their own post:
// if currentUser ? hide delete button : show delete button
// but currentUser id = userId of post user.id === match.params.id 