import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const About = () => {
  return (
    <div>
      <Typography component="h2" variant="h6">Welcome to cuneiform!</Typography>
      <Grid style={{ display: "inline-block", justifyContent: "space-between", alignSelf: "flex-end", textAlign: "justify" }}>
        <Typography component="p" variant="body1">
          A site for journaling. You can either write to one of our prompts, a quote, or whatever you want!
        </Typography>

        <Typography component="p" variant="body1">
          Please visit our <a href="https://github.com/mgcarbonell/cuneiform-frontend">Readme on GitHub</a> for a full list of credits, and thank yous. Sincerely, we hope you enjoy.
        </Typography>
      </Grid>
    </div>
  );
}

export default About;
