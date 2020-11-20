import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container, TextField } from '@material-ui/core';
import EntryModel from '../models/entry';


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

    EntryModel.create(props)
      .then(data => {
        props.history.push({
          pathname: '/entry/create',
          state: data
        })
      })
  }

  // handleChange = (event) => {
  //   if (event.target.type !== "text") {
  //     setState({ completed: !props.completed })
  //   }
    
  //   setTitle({
  //     [event.target.name]: event.target.value
  //   })

  //   setBody({
  //     [event.target.name]: event.target.value
  //   })
  // }

  return (
    <div>
      <Container maxWidth="sm">
        <form className={classes.root} onSubmit={handleSubmit} noValidate autoComplete="off">
          <TextField 
            id="outlined-basic" 
            label="Title" 
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
              onInput={ e => setBody(e.target.value)}
              variant="outlined"
            />
          </div>
        <Button 
          type="submit"
          className={classes.button}
        >
        Public
        </Button>
        </form>
      </Container>
    </div>
  );
}

export default NewEntry;