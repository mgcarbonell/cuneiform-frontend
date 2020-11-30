import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, makeStyles, Paper, Typography } from '@material-ui/core';
import EntryModel from '../models/entry';

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
    },
    [theme.breakpoints.up('md')]: {
      width: 700,
    },
    [theme.breakpoints.up('lg')]: {
      width: 1200
    }
  },
}))

const UserEntries = (props) => {

  const [entries, setEntries] = useState()

  const classes = useStyles();

  useEffect(() => {
    EntryModel.user(props.currentUser)
      .then(data => setEntries(data.entries))
  }, [props.currentUser])

  return (
    <div className={classes.root}>
      {entries.map((entry) => (
        <Paper 
          className={classes.paper}
          elevation={1}
          style={{
          display:"inline-block",
          textAlign: "center",
          padding: 15
          }}
        >
          <Typography component="h3" variant="h6" key={entry.id}>
          {entry.title}
        </Typography>
        <Typography component="h5" variant="body1">
          By {entry.userId}
        </Typography>
        <Typography compoment="p" variant="body1">
          {entry.body}
        </Typography>
        <Link to={`/entry/${entry.id}`}>
          <Button color="primary" variant="contained">
            Read more
          </Button>
        </Link>
        </Paper>
      ))}
    </div>
  )

}

export default UserEntries;
