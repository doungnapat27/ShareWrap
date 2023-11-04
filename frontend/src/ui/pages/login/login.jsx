import React, { Component } from 'react';
import { Box, Button, Typography,} from '@mui/material';
import logo from "../../assets/logo.svg";
import withStyles from './style/loginStyle';
import InputText from './components/loginInputText';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

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
        snackbarOpen: false,
        snackbarMessage: '',
        snackbarSeverity: 'success',
    };

    handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({ snackbarOpen: false });
    };
    handleLogin = (e) => {
        e.preventDefault();
        const loginSuccess = true; 
        if (loginSuccess) {
            this.setState({
                snackbarOpen: true,
                snackbarMessage: 'Logged in successfully!',
                snackbarSeverity: 'success'
            });
        } else {
            this.setState({
                snackbarOpen: true,
                snackbarMessage: 'Login failed. Please try again.',
                snackbarSeverity: 'error'
            });
        }
    };
    
      render() {
        // const { email, password} = this.state;
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
                    <InputText
                        className={classes.TextBoxInput}
                        placeholder='Email'
                        type="email"
                        id='email'
                        fullWidth={true}
                        margin='normal'
                        name='email'
                        icon='email'
                        onChange={this.handleChange}
                    />
                    <InputText
                        className={classes.TextBoxInput}
                        placeholder='Password'
                        type='password'
                        id='password'
                        fullWidth={true}
                        margin='normal'
                        name='password'
                        icon='password'
                        onChange={this.handleChange}
                    />
                  </Box>

                    <Button 
                        className={classes.loginButton}
                        variant="contained" 
                        type="submit"
                        onClick={this.handleLogin}
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
                    <Snackbar anchorOrigin={{vertical: 'bottom', horizontal:'center',}} open={this.state.snackbarOpen} autoHideDuration={2000} onClose={this.handleCloseSnackbar}>
                        <MuiAlert elevation={6} variant="filled" onClose={this.handleCloseSnackbar} severity={this.state.snackbarSeverity}>
                            {this.state.snackbarMessage}
                        </MuiAlert>
                    </Snackbar>
                </Box>
        )
      }
}

export default withStyles(Loginpage);