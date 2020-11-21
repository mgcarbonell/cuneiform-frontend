import React, { useState } from 'react';
import EntryModel from '../models/entry';
import Prompt from '../components/Prompt'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, Paper, TextField, Switch } from '@material-ui/core';


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
    <div style={{padding: 50}}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Paper>

          <Paper elevation={3}>
            <Prompt aria-label="A writing prompt" />
          </Paper>
          <Grid
            component="label"
            container
            justify="center"
            alignItems="center"
            spacing={1}
          >
            <Grid item>Quote</Grid>
            <Grid item>
              <Switch
              // checked={state.checkedB} change is between prompt OR a quote
              // onChange={handleChange}
              color="primary"
              name="checkedB"
              label="Quote or Prompt"
              inputProps={{ 'aria-label': 'primary checkbox for a quote or a prompt' }}
            />
            </Grid>
            <Grid item>Prompt</Grid>
          </Grid>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >

            <form 
                className={classes.root} 
                onSubmit={handleSubmit} 
                noValidate 
                autoComplete="off"
            >

              <div aria-label="Entry title textfield">
                <TextField 
                  id="outlined-basic" 
                  label="Title"
                  type="text"
                  value={title} 
                  onInput={ e => setTitle(e.target.value)}
                  variant="outlined" 
                />
              </div>

              <div aria-label="Journal entry textfield">
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
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}

export default NewEntry;