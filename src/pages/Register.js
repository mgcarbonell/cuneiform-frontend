import React, { useState } from 'react';
import UserModel from '../models/user';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


const Register = props => {
  const classes = useStyles();

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleName = e => {
    setName(e.target.value)
  }
  
  const handleUsername = e => {
    setUsername(e.target.value)
  }
  const handleEmail = e => {
    setEmail(e.target.value)
  }
  const handlePassword = e => {
    setPassword(e.target.value)
  }
  const handleConfirmPassword = e => {
    setConfirmPassword(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (password === confirmPassword) {
      UserModel.create({ email, name, username, password })
        .then(data => {
          console.log('Successful register', data)
          // redirect to /login
          props.history.push('/login')
        })
    }
  }
  

  return (
    <div>
      <h4>Register</h4>
      <form className={classes.root} noValidate autoComplete="off" onSubmit={ handleSubmit }>
        <div className="form-group">
          <TextField
            onChange={ handleName } 
            value={ name }
            type="text" 
            id="name" 
            name="name"
            label="Name" 
            variant="filled"
            required
          />
        </div>
        <div className="form-group">
          <TextField 
            onChange={ handleUsername } 
            value={ username }
            type="text" 
            id="username" 
            name="username" 
            label="username"
            variant="filled"
            required
          />
        </div>
        <div className="form-group">
          <TextField 
            onChange={ handleEmail } 
            value={ email } 
            type="email" 
            id="email" 
            name="email" 
            label="email"
            variant="filled"
            required
          />
        </div>
        <div className="form-group">
          <TextField 
            onChange={ handlePassword } 
            value={ password } 
            type="password" 
            id="password" 
            name="password" 
            label="password"
            variant="filled"
            required
          />
        </div>
        <div className="form-group">
          <TextField
            onChange={ handleConfirmPassword } 
            value={ confirmPassword } 
            type="password" 
            id="confirm-password" 
            name="confirm-password" 
            label="confirm your password"
            variant="filled"
            required
          />
        </div>
        <Button 
          variant="contained" 
          color="primary" 
          type="submit"
        >
          Register
        </Button>
      </form>
    </div>
  )
}

export default Register;