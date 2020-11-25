import React, { useState } from 'react';
import EntryModel from '../models/entry';
import Prompt from '../components/Prompt'
import Quote from '../components/Quote'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button, Grid, Paper, TextField, Switch } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const NewEntryModal = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [promptId, setPromptId] = useState();
  const [quote, setQuote] = useState();
  const [isPublic, setIsPublic] = useState();
  const [state, setState] = useState({
    checkedB: false
  });

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let userId = localStorage.getItem("id")
  
    EntryModel.create({ title, body, userId, promptId, quote, isPublic })
      .then(data => {
        props.history.push('/create')
      })
  }

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      {/* <button type="button" onClick={handleOpen}>
        react-transition-group
      </button> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
          <Paper>
            <Paper 
              elevation={3}
            >
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
                    inputProps={{ 'aria-label': 'primary checkbox for a quote or a prompt' }}
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
                    onClick={ e => setIsPublic(false)}
                // we'd need a value of setting isPublic to true
                  >
                    Private
                  </Button>
                  <Button 
                    type="submit"
                    className={classes.button}
                    onClick={ e => setIsPublic(true)}
                  // we'd need a value of setting isPublic to true
                  >
                  Public
                  </Button>
                  {/* we'd have another button here, setting the value of isPublic to false */}
                </form>
              </Grid>
            </Paper>
          </Grid>
        </Fade>
      </Modal>
    </div>
  );
}

export default NewEntryModal;