import React, {useState } from 'react';
import CommentModel from '../models/comment';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, Paper, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '70ch',
    },
    // '& > *': {
    //   margin: theme.spacing(1),
    //   width: '70ch',
    // },
  },
}));

const CommentForm = (props) => {
  const classes = useStyles();

  const [body, setBody] = useState(props.entryBody);

  const handleSubmit = (e) => {
    e.preventDefault();
    let userId = localStorage.getItem("id")
    CommentModel.create({ userId, body }, props.commentId)
      .then(() => {
        props.setCommentFormToggle(false)
      })
  }

  return (
    <div>
      <form 
        className={classes.root} 
        onSubmit={handleSubmit} 
        noValidate 
        autoComplete="off"
      >

      <div aria-label="Journal entry textfield">
        <TextField
          id="outlined-multiline-static"
          label=""
          multiline
          rows={3}
          value={body}
          type="text"
          onInput={ e => setBody(e.target.value)}
          variant="outlined"
        />
        
      </div>
      <Button 
        type="submit"
        className={classes.button}
        onClick={ e => props.setCommentFormToggle(true)}
      >
        Comment
      </Button>
      </form>
    </div>
  )
}

export default CommentForm;
