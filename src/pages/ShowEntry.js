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

const ShowEntry = (props) => {
  const [entry, setEntry] = useState([]);
  const [formToggle, setFormToggle] = useState(false);
  const [comments, setComments] = useState([]);
  
  const { id } = useParams()

  let userId = localStorage.getItem('id')

  // entry model show
  useEffect(() => {
    EntryModel.show(props.match.params.id)
      .then(data => setEntry(data.entry))
  }, [props.match.params.id])

  // comment model show
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

  const handleDelete = () => {
    EntryModel.delete(entry, entry.id)
      .then(() =>
        props.history.push('/profile')
      )
  }

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

      { parseInt(userId) === entry.userId &&
        <>
          <IconButton onClick={handleToggle}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
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
    </>
  );
}

export default ShowEntry;