import React, { Component } from 'react';
import { Box, TextField, Button, Typography, InputAdornment, IconButton } from '@mui/material';
import logo from "../../assets/logo.svg";
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Lock';
import withStyles from './style/loginStyle';

class Loginpage extends Component {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   const jsondata = {
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   };

  //   fetch("http://localhost:3000/login", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(jsondata),
  //   })
  //     .then((response) => response.text())
  //     .then((data) => {
  //       if (data === 'successfully logged in') {
  //         alert('Login successefully!');
  //         localStorage.setItem('token', data.token);
  //         window.location = '/home';
  //       }
  //       else {
  //         alert(data);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  state = {
    email: '',
    password: '',
  };
      render() {
        const { email, password} = this.state;
        const { classes } = this.props;
        const handleSignUpClick = () => {
            window.location.href = "/register";
        };
        return (
                <Box className={classes.container}
                  elevation={3}
                  noValidate
                  autoComplete="off"
                  >
                  <Box className={classes.loginLogo}>
                    <img src={logo} alt='logo' sx={{ width: '150%', height: 'auto' }}></img>
                  </Box>
                  <Box className={classes.inputTextField}>
                    <TextField 
                        className= {classes.TextBoxInput} 
                        placeholder='Email'
                        type="email"
                        id='email'
                        fullWidth 
                        margin="normal"
                        name="email"
                        // value={email}
                        onChange={this.handleChange}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <EmailIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField 
                        className= {classes.TextBoxInput} 
                        placeholder='Password'
                        type='password'
                        id='password'
                        fullWidth 
                        margin="normal"
                        name="password"
                        // value={password}
                        onChange={this.handleChange}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PasswordIcon />
                                </InputAdornment>
                            ),
                        }}
                    /> 
                  </Box>

                    <Button 
                        className={classes.loginButton}
                        variant="contained" 
                        type="submit"
                    >
                        Login
                    </Button>
                    <Box className={classes.BoxaccountText}>
                          <Typography variant="body1">
                              Don't have an account?
                          </Typography>
                          <Button className={classes.Buttontosignup}
                              onClick={handleSignUpClick}
                          >
                              Sign Up
                          </Button>
                      </Box>
                </Box>
        )
      }
}

export default withStyles(Loginpage);