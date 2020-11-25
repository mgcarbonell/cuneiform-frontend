import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, IconButton, Grid } from '@material-ui/core';
import EntryModel from '../models/entry';
import EditIcon from '@material-ui/icons/Edit' 
import DeleteIcon from '@material-ui/icons/Delete';
import CompleteEntry from '../components/CompleteEntry';
import EditEntryForm from '../components/EditEntryForm';
// import material styling from @material-ui

const ShowEntry = (props) => {
  
  const [entry, setEntry] = useState([]);
  // const [comment, setComment] = useState();
  const [formStyle, setFormStyle] = useState();


  let userId = localStorage.getItem('id')

  useEffect(() => {
    EntryModel.show(props.match.params.id)
      .then(data => setEntry(data.entry))
  }, [props.match.params.id])

  useEffect(() => {
    EntryModel.update(props.match.params.id)
    .then(data => setEntry)
  })


  // toggleBodyForm = () => {
  //   formStyle.display === 'block'
  //   ? setFormStyle({formStyle: {display: 'none'}})
  //   : setFormStyle({formStyle: {display: 'block'}});
  // };


  return (
    <>
    <CompleteEntry
      entryTitle={entry.title}
      entryId={entry.id}
      entryBody={entry.body}
    />
      <Grid item xs={12}>
      { parseInt(userId) === entry.userId ?
        <>
          <IconButton >
            <EditIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </>  
      :
        <>
        </>  
      }
    <EditEntryForm
      entryTitle={entry.title}
      entryId={entry.id}
      entryBody={entry.body}
      />

        </Grid>
        <Link to={ '/' }>
          <Button color="primary" variant="contained">
            Back to all public entries
          </Button>
        </Link>
        <Link to={'/profile'}>
          <Button color="primary" variant="contained">
            Back to profile
          </Button>
        </Link>
    </>
  );
}

export default ShowEntry;

// In order for a user to delete their own post:
// if currentUser ? hide delete button : show delete button
// but currentUser id = userId of post user.id === match.params.id 