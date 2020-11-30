import React from 'react';
import Grid from '@material-ui/core/Grid'

const Contact = () => {
  return (
    <div>
      <Grid style={{ flexGrow: 1 }}>
        <h2>Contact</h2>
          <Grid style={{ justifyContent: "flex-start" }}>
            <p>Love our site? Hate it? Want to reach out and say what's up? All of the above?</p>
            <p>Go away. We're Software Engineers not extroverts.</p>
            <p> Just kidding, hit us up!</p>
            <p>Devin Blair <a href="https://www.linkedin.com/in/devin-blair/">LinkedIn</a>, <a href="https://github.com/dcblair">GitHub</a></p>
            <p>Mario Carbonell <a href="https://www.linkedin.com/in/mgcarbonell/">LinkedIn</a>, <a href="https://github.com/mgcarbonell">GitHub</a>, <a href="https://twitter.com/mgcarbonell1">Twitter</a></p>
          </Grid>
      </Grid>
    </div>
  );
}

export default Contact;