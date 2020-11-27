import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button, IconButton, Grid } from '@material-ui/core';
import EntryModel from '../models/entry';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CompleteEntry from '../components/CompleteEntry';
import EditEntryForm from '../components/EditEntryForm';
import Comments from '../components/Comments';
import CommentForm from '../components/CommentForm';
import ConfirmDialog from '../components/ConfirmDialog'
// import material styling from @material-ui

const ShowEntry = (props) => {
  
  const [entry, setEntry] = useState([]);
  const [formToggle, setFormToggle] = useState(false);
  const [commentFormToggle, setCommentFormToggle] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);

  let userId = localStorage.getItem('id')

  // entry model hooks and functions
  useEffect(() => {
    EntryModel.show(props.match.params.id)
      .then(data => setEntry(data.entry))
  }, [props.match.params.id])

  useEffect(() => {
    EntryModel.update(props.match.params.id)
    .then(data => setEntry)
  }, [])

  const handleToggle = () => {
    setFormToggle(true)
  }

  const handleDelete = () => {
    EntryModel.delete(entry, entry.id)
      .then(
        props.history.push('/profile')
        )
  }

  // comment models hooks and functions


  return (
    <>
      <Grid item xs={12}>
      { formToggle ?
        <EditEntryForm
          entryTitle={entry.title}
          entryId={entry.id}
          entryBody={entry.body}
          setFormToggle={setFormToggle}
        />
      :
        <CompleteEntry
          entryTitle={entry.title}
          entryId={entry.id}
          entryBody={entry.body}
        />
      }

      { parseInt(userId) === entry.userId ?
        <>
          <IconButton onClick={handleToggle}>
            <EditIcon />
          </IconButton>
          <IconButton aria-label="delete" onClick={() => setConfirmOpen(true)}>
            <DeleteIcon />
          </IconButton>
          <ConfirmDialog
              title="Delete Post?"
              open={confirmOpen}
              setOpen={setConfirmOpen}
              onConfirm={handleDelete}
          >
            Do you really want to delete this entry?
          </ConfirmDialog>
        </>  
      :
        <>
        </>  
      }
      </Grid>

      <Link to={ '/' }>
        <Button color="primary" variant="contained">
          Back to all public entries
        </Button>
      </Link>
      
      <CommentForm 
        entryId={entry.id}
        comments={props.comments}
        setComments={props.setComments}
        commentFormToggle={props.commentFormToggle}
        setCommentFormToggle={setCommentFormToggle}
      />
      
      <Comments
        entryId={entry.id}
        commentFormToggle={props.commentFormToggle}
        setCommentFormToggle={props.setCommentFormToggle}
      />
    </>
  );
}

export default ShowEntry;