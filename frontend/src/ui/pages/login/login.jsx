import React, { Component } from 'react';
import { Box, Button, Typography,} from '@mui/material';
import logo from "../../assets/logo.svg";
import withStyles from './style/loginStyle';
import InputText from './components/loginInputText';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { request, setAuthHeader, setUser } from '../../../helpers/axios_helper';

class Loginpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: '',
        password: '',
        snackbarOpen: false,
        snackbarMessage: '',
        snackbarSeverity: 'success',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
    handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({ snackbarOpen: false });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.login(e);
    };
    
    login = (e) =>{
      console.log('login');
      console.log(this.state);
      e.preventDefault();
      request(
        "POST",
        "/login",
        {
            email: this.state.email,
            password: this.state.password
        }).then(
        (response) => {
            setAuthHeader(response.data.token);
            setUser(JSON.stringify(response.data))
            const uid = response.data.id;
            this.setState({
              snackbarOpen: true,
              snackbarMessage: 'Logged in successfully!!',
              snackbarSeverity: 'success',
              }, () => { 
                setTimeout(() => {
                    window.location.href = "/home/"+uid; 
                }, 1000); 
            });
        }).catch(
        (error) => {
            setAuthHeader(null);
            this.setState({
              snackbarOpen: true,
              snackbarMessage: error.response.data.message,
              snackbarSeverity: 'error'
          });
        }
      );
    }
    handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    }
    
      render() {
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
                        onClick={this.handleSubmit}
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
