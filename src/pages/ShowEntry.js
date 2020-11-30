import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, IconButton, Grid } from '@material-ui/core';
import EntryModel from '../models/entry';
import CommentModel from '../models/comment';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CompleteEntry from '../components/CompleteEntry';
import EditEntryForm from '../components/EditEntryForm';
import Comments from '../components/Comments';
import CommentForm from '../components/CommentForm';
import ConfirmDialog from '../components/ConfirmDialog'

const ShowEntry = (props) => {
  const [entry, setEntry] = useState([]);
  const [formToggle, setFormToggle] = useState(false);
  const [comments, setComments] = useState([]);
  const [confirmOpen, setConfirmOpen] = useState(false)
  
  const { id } = useParams()

  let userId = localStorage.getItem('id')

  // show current user entry
  useEffect(() => {
    EntryModel.show(props.match.params.id)
      .then(data => setEntry(data.entry))
  }, [props.match.params.id])

  // show comments for entry
  const loadComments = async () => {
    const data = await CommentModel.show(id)
    setComments(data.comments)
  }

  useEffect(() => {
    loadComments()
  }, [])


  const handleToggle = () => {
    setFormToggle(true)
  }

  // delete entry
  const handleDelete = () => {
    EntryModel.delete(entry, entry.id)
      .then(
        props.history.push('/profile')
        )
  }

  return (
    <Grid
      justify="center"
      alignItems="center"
    >
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

      { parseInt(userId) === entry.userId &&
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
      }
      </Grid>

      <Link to={ '/' }>
        <Button color="primary" variant="contained">
          Back to all public entries
        </Button>
      </Link>

      <CommentForm 
        entryId={ id } 
        loadComments={ loadComments }
        comments={ comments }
      />
      
      <Comments
        comments={ comments }
        setComments={ setComments }
        loadComments={ loadComments }
      />
    </Grid>
  );
}

export default ShowEntry;