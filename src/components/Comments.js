import React, { useEffect, useState } from 'react';
import CommentModel from '../models/comment';
import { Grid, IconButton, Paper } from '@material-ui/core';
// import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';


const Comments = ({ comment, comments }) => {
  console.log(comments)
  // const [comment, setComment] = useState(true);
  
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
            <h3 key={comment.id}>{comment.userId}</h3>
            <p>{comment.body}</p>
            {/* <IconButton onClick={handleCommentFormToggle}>
            <EditIcon />
            </IconButton> */}
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