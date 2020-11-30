import React, { useState } from 'react';
import CommentModel from '../models/comment';
import { Card, CardContent, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  root: {
    flexDirection: 'column',
    wordWrap: 'break-word',
    justify: 'center',
    alignItems: 'center',
    flexGrow: 1,
    padding: theme.spacing(0, 3),
  },
  card: {
    maxWidth: 300,

  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: '0px 20px 0px 20px'
  }
}))



const Comments = ({ comments, loadComments, setComments }) => {
  const [comment] = useState();

  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

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
        { comments.map((comment) => (
            <Card
              className={classes.card}
              elevation={1}
              style={{
              // display:"inline-block",
              textAlign: "center",
              padding: 30
              }}
            >
              <div className={classes.content}>
                <Grid item>
                  <Typography component="h3" variant="h6" key={comment.id}>
                    {comment.userId}
                  </Typography>
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
            </Card>
        ))}
    </div>
  )
}

export default Comments;