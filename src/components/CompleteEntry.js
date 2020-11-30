import { Typography } from '@material-ui/core';
import React from 'react';

const CompleteEntry = (props) => {
  return (
    <div>
      <Typography component="h3" variant="h6">{props.entryTitle}</Typography>
      <Typography component="h5" variant="h6">{props.id}</Typography>
      <Typography component="p" variant="body1">{props.entryBody}</Typography>
    </div>
  )
}

export default CompleteEntry;