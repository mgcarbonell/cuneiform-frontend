import React from 'react';
import { Grid } from '@material-ui/core'

const style = {
  backgroundColor: "#F8F8F8",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "50px",
  width: "100%",
}

const fixed = {
display: 'block',
padding: '20px',
height: '50px',
width: '100%',
}

function Footer({ children }) {
  return (
      <div>
          <div style={fixed} />
          <div style={style}>
            <Grid item>
              { children }
            </Grid>
          </div>
      </div>
  )
}

export default Footer;
