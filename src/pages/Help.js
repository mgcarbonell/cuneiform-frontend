import React from 'react';
import Typography from '@material-ui/core/Typography'

const Help = () => {
  return (
    <div>
      <Typography component="h2" variant="h6">Help</Typography>
      <Typography component="p" variant="body">The most asked question during this project, so you're not alone.</Typography>
      <img src="https://media.giphy.com/media/l4EoU3eoCGJER0Oru/giphy.gif" alt="Oscar Kakoshka was a painter" style={{ width: 200, height: 200 }}/>
    </div>
  );
}

export default Help;
