import React, { useState } from 'react';
import CommentModel from '../models/comment';
import { Paper, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  root: {
    flexDirection: 'column',
    wordWrap: 'break-word',
    justifyItems: 'center',
    flexGrow: 1,
    '& > *': {
      margin: theme.spacing(.7),
    },
  },
  paper: {
    width: 300,
    [theme.breakpoints.down('sm')]: {
      width: 300,
      height: 100
    },
    [theme.breakpoints.up('md')]: {
      width: 400,
      height: 90
    },
    [theme.breakpoints.up('lg')]: {
      width: 500,
      height: 100
    }
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: '20px'
  }
}))

const Comments = ({ comments, loadComments, setComments }) => {
  const [comment] = useState();

  const classes = useStyles();

  const handleCommentDelete = (commentId) => {
    CommentModel.delete(comment, commentId)
    .then(
      setComments(comments.filter(comment => comment.id !== commentId))
      ).then(
        loadComments()
        ).then(
          window.location.reload()
        )
  }

  return(
    <div className={ classes.root }>
        { comments.map((comment) => (
          <Grid>
            <Paper
            className={classes.paper}
            elevation={1}
            style={{
            display:"inline-block",
            textAlign: "center",
            }}
            >
              <div className={classes.content}>
                <Grid item>
                  {/* <Typography component="h3" variant="h6" key={comment.id}>
                    {comment.userId}
                  </Typography> */}
                </Grid>
                <Grid item>
                  <Typography component="p" variant="body1">
                  {comment.body}
                  </Typography>
                </Grid>
                <Grid item>
                  <IconButton onClick={ () => handleCommentDelete(comment.id) }>
                  <DeleteIcon />
                  </IconButton>
                </Grid>
              </div>
            </Paper>
          </Grid>
        ))}
    </div>
  )
}

export default Comments;