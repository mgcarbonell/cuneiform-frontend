import React from 'react';
import Typography from '@material-ui/core/Typography'

const About = () => {
  return (
    <div>
      <Typography component="h2" variant="h6">Welcome to cuneiform!</Typography>
      <Typography component="p" variant="body1">
        A site for journaling. You can either write to one of our prompts, a quote, or whatever you want!
      </Typography>
      <Typography component="p" variant="body1">
        We would never sell your information, or claim your ideas as our own intellectual property...... Or would we?
      </Typography>
      <img src="https://media.giphy.com/media/1zKdb4WSHgY4QKAsjo/giphy.gif" alt="ZUCC'D" style={{ width: 200, height: 200 }}/>
      <Typography component="p" variant="body1">
        Please visit our <a href="https://github.com/mgcarbonell/cuneiform-frontend">Readme on GitHub</a> for a full list of credits, and thank yous. Sincerely, we hope you enjoy.
      </Typography>
    </div>
  );
}

export default About;
