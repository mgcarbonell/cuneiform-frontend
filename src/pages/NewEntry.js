import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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

const NewEntry = () => {
  const classes = useStyles();

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Title" variant="outlined" />
      </form>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
        <TextField
          id="outlined-multiline-static"
          label="Write Away"
          multiline
          rows={40}
          defaultValue=""
          variant="outlined"
        />
        </div>
      </form>
    </div>
  );
}

export default NewEntry;