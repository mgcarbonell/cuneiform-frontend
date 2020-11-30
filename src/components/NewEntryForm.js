import React, { useState } from 'react';
import EntryModel from '../models/entry';
import Prompt from '../components/Prompt'
import Quote from '../components/Quote'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, Paper, TextField, Switch } from '@material-ui/core';
import { useHistory } from 'react-router-dom';


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

  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [promptId, setPromptId] = useState();
  const [quote, setQuote] = useState();
  const [isPublic, setIsPublic] = useState(true);
  const [state, setState] = useState({
    checkedB: false
  });
  
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();
    let userId = localStorage.getItem("id")
  
    EntryModel.create({ title, body, userId, promptId, quote, isPublic })
      .then(() => {
        props.setOpenDialog(false)
        history.push('/profile')
      })
  }

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div style={{ padding: 20 }}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Paper>

          <Paper elevation={3}>
            {!state.checkedB ?
            <Prompt 
              aria-label="A writing prompt"
              value={promptId}
            />
            :
            <Quote 
              aria-label="A quote for you to write about" 
              value={quote}
            />
            }
          </Paper>
          <Grid
            component="label"
            container
            justify="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item>Prompt</Grid>
            <Grid item>
              <Switch
                checked={state.checkedB}
                onChange={handleChange}
                color="primary"
                name="checkedB"
                label="Quote or Prompt"
              />
            </Grid>
            <Grid item>Quote</Grid>
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
                  rows={20}
                  value={body}
                  type="text"
                  onInput={ e => setBody(e.target.value)}
                  variant="outlined"
                />
              </div>
              <Grid>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <Grid item>Private</Grid>
                  <Grid item>
                    <Switch
                      checked={isPublic}
                      onChange={() => setIsPublic(!isPublic)}
                      color="primary"
                      name="privacy"
                      label="publicOrPrivate"
                    />
                  </Grid>
                  <Grid item> Public</Grid>
                </Grid>
              </Grid>

              <Button 
                type="submit"
                className={classes.button}
              >
                Submit
              </Button>
            </form>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}

export default NewEntry;