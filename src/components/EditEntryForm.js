import React, { useState } from 'react';
import EntryModel from '../models/entry';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, Paper, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '70ch',
    },
    '& > *': {
      margin: theme.spacing(1),
      width: '70ch',
    },
  },
}));

const EditEntryForm = (props) => {
  const classes = useStyles();

  const [title, setTitle] = useState(props.entryTitle);
  const [body, setBody] = useState(props.entryBody);
  const [isPublic, setIsPublic] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    let userId = localStorage.getItem("id")
    EntryModel.update({ title, body, userId, isPublic }, props.entryId)
      .then(() => {
        props.setFormToggle(false)
      })
  }

  return (
    <div style={{ padding: 50 }}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Paper>
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
                  defaultValue={props.entryTitle}
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
                  defaultValue={props.entryBody}
                  onInput={ e => setBody(e.target.value)}
                  variant="outlined"
                />
              </div>

              <Button 
                type="submit"
                className={classes.button}
                onClick={ e => setIsPublic(false)}
              >
                Private
              </Button>
              <Button 
                type="submit"
                className={classes.button}
                onClick={ e => setIsPublic(true)}
              >
                Public
              </Button>
              </form>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}

export default EditEntryForm;