import React from 'react';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'


const Contact = () => {
  return (
    <div>
      <Grid style={{ flexGrow: 1, textAlign: "center"}} >
        <img src="https://media.giphy.com/media/Yavo0SXhZYhSo/giphy.gif" alt="Fry squinting" style={{ width: 200, height: 200 }}/>
        <Typography component="h2" variant="h6">Contact</Typography>
          <Grid style={{ display: "inline-block", justifyContent: "space-between", alignSelf: "flex-end", textAlign: "justify"}}>
            <Typography component="p" variant="body1">
              Love our site? Hate it? Want to reach out and say what's up? All of the above?
            </Typography>
            <Typography component="p" variant="body1">
              Go away. We're Software Engineers not extroverts.
            </Typography>
            <Typography component="p" variant="body1">
              We're kidding, we're kidding. Hit us, give us a follow!</Typography>
            <Typography component="p" variant="body1">
              Devin Blair <a href="https://www.linkedin.com/in/devin-blair/">LinkedIn</a>, <a href="https://github.com/dcblair">GitHub</a>
            </Typography>
            <Typography component="p" variant="body1">
              Mario Carbonell <a href="https://www.linkedin.com/in/mgcarbonell/">LinkedIn</a>, <a href="https://github.com/mgcarbonell">GitHub</a>, <a href="https://twitter.com/mgcarbonell1">Twitter</a>
            </Typography>
          </Grid>
      </Grid>
    </div>
  );
}

export default Contact;
