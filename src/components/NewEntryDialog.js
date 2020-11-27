import React, { useState, useEffect, useRef } from 'react';
import Button from '@material-ui/core/Button';
import { 
              Dialog, 
              DialogTitle, 
              DialogContent, 
              makeStyles 
            } from '@material-ui/core';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';

const useStyles = makeStyles(theme => ({
  dialogWrapper: {
    padding: theme.spacing(2),
  }
}))

const NewEntryDialog = (props) => {

  const {title, children, openDialog, setOpenDialog} = props;
  const classes = useStyles()

  return (
    <Dialog open={openDialog} >
      <DialogTitle>
        <div>
          {title}
        </div>
      </DialogTitle>
      <DialogContent dividers>
        {children} 
      </DialogContent>
    </Dialog>
  )

}

export default NewEntryDialog;