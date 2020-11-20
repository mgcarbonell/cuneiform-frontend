import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container, TextField } from '@material-ui/core';
import EntryModel from '../models/entry';
import Prompt from '../components/Prompt'


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const NewEntry = (props) => {
  const classes = useStyles();
  
  const [title, setTitle] = useState()
  const [body, setBody] = useState()
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log( title, body)

    EntryModel.create({ title, body })
      .then(data => {
        props.history.push('/create')
      })
  }

  return (
    <div>
      <Prompt />
      <Container maxWidth="sm">


        <form className={classes.root} onSubmit={handleSubmit} noValidate autoComplete="off">
          <TextField 
            id="outlined-basic" 
            label="Title"
            type="text"
            value={title} 
            onInput={ e => setTitle(e.target.value)}
            variant="outlined" 
          />
          <div>
            <TextField
              id="outlined-multiline-static"
              label="Write Away"
              multiline
              rows={40}
              value={body}
              type="text"
              onInput={ e => setBody(e.target.value)}
              variant="outlined"
            />
          </div>
        <Button 
          type="submit"
          className={classes.button}
          // we'd need a value of setting isPublic to true
        >
        Public
        </Button>
        {/* we'd have another button here, setting the value of isPublic to false */}
        </form>
      </Container>
    </div>
  );
}

export default NewEntry;