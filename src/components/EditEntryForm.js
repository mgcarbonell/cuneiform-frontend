import React, { useState } from 'react';
// import { useHistory } from "react-router-dom";
import EntryModel from '../models/entry';
import { makeStyles } from '@material-ui/core/styles';
import { 
        Button, 
        Grid, 
        Paper, 
        TextField, 
        Switch 
      } from '@material-ui/core';

  const useStyles = makeStyles((theme) => ({
    field: {
      width: 300,
      [theme.breakpoints.down('sm')]: {
        width: 300,
      },
      [theme.breakpoints.up('md')]: {
        width: 400,
      },
      [theme.breakpoints.up('lg')]: {
        width: 500,
      }
    },
  }))

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
    <div>
        <Paper
          className={classes.paper}
          elevation={1}
          style={{
          display:"inline-block",
          textAlign: "center",
          }}
        >
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >

            <form 
                onSubmit={handleSubmit} 
                noValidate 
                autoComplete="off"
            >

              <div aria-label="Entry title textfield">
                <TextField
                  className={classes.field}
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
                  className={classes.field}
                  style={{
                    marginTop: 10,
                  }}
                  id="outlined-multiline-static"
                  label="Write Away"
                  multiline
                  rows={20}
                  value={body}
                  type="text"
                  defaultValue={props.entryBody}
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
    </div>
  );
}

export default EditEntryForm;