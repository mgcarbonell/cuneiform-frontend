import React, { useState } from 'react';
import CommentModel from '../models/comment';
import { Grid, IconButton, Paper } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';


const Comments = ({ comments, loadComments, setComments }) => {
const [comment] = useState();

  const handleCommentDelete = (commentId) => {
    CommentModel.delete(comment, commentId)
      .then(
        setComments(comments.filter(comment => comment.id != commentId)
      )).then(
        loadComments()
      )
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
            <h3 key={comment.id}>{comment.userId}</h3>
            <p>{comment.body}</p>
            <IconButton onClick={ () => handleCommentDelete(comment.id) }>
            <DeleteIcon />
            </IconButton>
          </Paper>
        )).reverse()}
      </Grid>
    </>
  )
}

export default Comments;