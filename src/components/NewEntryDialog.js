import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const NewEntryDialog = (props) => {
  // const [openDialog, setOpenDialog] = useState(false);
  // const [scroll, setScroll] = useState('paper');

  return (
    <div>
      <Dialog 
        openDialog={props.openDialog}
        setOpenDialog={props.setOpenDialog}  
      >
        <DialogTitle>
          <div>Title</div>
        </DialogTitle>
        <DialogContent>
          <div>Content</div>
        </DialogContent>
      </Dialog>
    </div>
  )

}

export default NewEntryDialog;