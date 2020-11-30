import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, Paper, Typography, makeStyles, Divider } from '@material-ui/core';
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
  typography: {
    margin: 20,
  }
}))

const EntryList = (props) => {

  const [entries, setEntries] = useState([])
  const classes = useStyles();
  

  useEffect(() => {
    EntryModel.all()
      .then(data => setEntries(data.entries))
  }, [])

  

  return (
    <div className={ classes.root }>
      {entries.map((entry) => (
        <Grid>
          <Paper
          className={classes.paper}
          elevation={3} 
          style={{
          padding: 10,
          paddingBottom: 20
          }}
          >
            <Grid className={classes.content}>
              <Typography component="h3" variant="h6" key={entry.id}>
                {entry.title}
              </Typography>
              <Typography component="h5" variant="p" key={entry.userId}>
                By {entry.userId}
              </Typography>
              <Divider variant="middle" />
              <Typography className={classes.typography} component="p" variant="body1" style={{ textAlign: "justify" }}>
                {entry.body.split(' ').splice(0, 100).join(' ')}...
              </Typography>
              <Link to={`/entry/${entry.id}`}>
                <Button color="primary" variant="contained">
                  Read more
                </Button>
              </Link>
            </Grid>
          </Paper>
        </Grid>
      ))}
      </div>
  )

}

export default EntryList;