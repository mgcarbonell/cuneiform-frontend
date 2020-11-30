import React, { useState } from 'react';
import CommentModel from '../models/comment';
import { Grid, IconButton, makeStyles, Paper, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    wordWrap: 'break-word',
    // flexWrap: 'wrap',
    flexGrow: 1,
    '& > *': {
      margin: theme.spacing(5),
      width: theme.spacing(50),
    },
  },
  paper: {
    margin: 'auto',
  },

}))



const Comments = ({ comments, loadComments, setComments }) => {
  const [comment] = useState();

  const classes = useStyles();

  const handleCommentDelete = (commentId) => {
    CommentModel.delete(comment, commentId)
    .then(
      setComments(comments.filter(comment => comment.id !== commentId)
      )).then(
        loadComments()
      )
  }

  return(
    <div className={ classes.root }>
      <Grid
        justify="center"
        alignItems="center"
      >
        { comments.map((comment) => (
          <Paper
          elevation={1} 
          style={{
          textAlign: "center",
          padding: 10,
          paddingBottom: 20
          }}
          >
            <Grid item>
              <Typography component="h3" key={comment.id}>
                {comment.userId}
              </Typography>
            </Grid>
            <Grid item>
              <Typography component="p">
              {comment.body}
              </Typography>
            </Grid>
            <Grid item>
              <IconButton onClick={ () => handleCommentDelete(comment.id) }>
              <DeleteIcon />
              </IconButton>
            </Grid>
          </Paper>
        ))}
      </Grid>
    </div>
  )
}

export default Comments;