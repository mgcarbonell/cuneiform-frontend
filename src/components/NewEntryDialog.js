import React, { useState, useEffect, useRef } from 'react';
// import Button from '@material-ui/core/Button';
import { 
              Dialog, 
              DialogTitle, 
              DialogContent,
              Typography, 
              IconButton,
              // makeStyles 
            } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close'
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContentText from '@material-ui/core/DialogContentText';

// const useStyles = makeStyles(theme => ({
//   dialogWrapper: {
//     padding: theme.spacing(2),
//   }
//     dialogTitle: {
//       paddingRight: '0px',
      
//     }
// }))

const NewEntryDialog = (props) => {

  const { title, children, openDialog, setOpenDialog } = props;
  // const classes = useStyles()

  return (
    <Dialog open={ openDialog } >
      <DialogTitle 
        // className={ classes.dialogTitle }
      >
        <div style={{ display: 'flex' }}>
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <IconButton
            variant="contained"
            aria-label="close"
            onClick={() => { setOpenDialog(false) }}
          >
            <CloseIcon color="action"/>
          </IconButton>  
        </div>
      </DialogTitle>
      <DialogContent dividers>
        {children} 
      </DialogContent>
    </Dialog>
  )

}

export default NewEntryDialog;