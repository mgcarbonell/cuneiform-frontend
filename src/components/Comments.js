import React, {useEffect, useState} from 'react';
import CommentModel from '../models/comment';
import { Grid, IconButton, Paper } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';


const Comments = (props) => {
  
  const [comment, setComment] = useState(true);
  const [comments, setComments] = useState([]);
  const [entryId, setEntryId] = useState([]);
  
  useEffect(() => {
    console.log(entryId)
    CommentModel.show(entryId)
      .then(data => setComments(data.comments))
  }, [])
  
  const handleCommentFormToggle = () => {
    props.setCommentFormToggle(true)
  }

  const handleCommentDelete = () => {
    CommentModel.delete(comment, comment.id)
      .then(data =>
        console.log(data))
  }

  return(
    <>
      <Grid>
        { comments.map((comment) => (
          <Paper
          elevation={1} 
          style={{
          padding: 10,
          paddingBottom: 20
          }}
          >
            <h3 key={comment.id}>{comment.id}</h3>
            <h5>By {comment.userId}</h5>
            <p>{comment.body}</p>
            <IconButton onClick={handleCommentFormToggle}>
            <EditIcon />
            </IconButton>
            <IconButton onClick={handleCommentDelete}>
            <DeleteIcon />
            </IconButton>
          </Paper>
        )).reverse()}
      </Grid>
    </>
  )
}

export default Comments;