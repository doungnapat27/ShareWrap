import React, { Component } from 'react';
import { Box, Button, Typography} from '@mui/material';
import InputText from './components/registerInputText';
import withStyles from './style/registerStyle';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { request, setAuthHeader } from '../../../helpers/axios_helper';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password:  '',
            confirm_password: '',
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

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value }, () => {
            if (name === "password" || name === "confirmPassword") {
                if (this.state.password && this.state.confirmPassword && this.state.password !== this.state.confirmPassword) {
                    this.setState({ confirmPasswordError: "Passwords do not match" });
                } else {
                    this.setState({ confirmPasswordError: "" });
                }
            }
        });
    }

    handleSubmit = (e) => {
        console.log('submit');
        console.log(this.state);
        e.preventDefault();
        if (this.state.password !== this.state.confirmPassword) {
            this.setState({confirmPasswordError: "Passwords do not match."})
        } else {
            this.setState({confirmPasswordError: ""})
            this.register(e)
        }
        console.log(this.state);
    }

    register = (e) =>{
      e.preventDefault();
      request(
        "POST",
        "/register",
        {
            email: this.state.email,
            username: this.state.username,
            password: this.state.password
        }).then(
        (response) => {
            setAuthHeader(response.data.token);
            this.setState({
              snackbarOpen: true,
              snackbarMessage: 'Registration successful!',
              snackbarSeverity: 'success',
              }, () => { 
                setTimeout(() => {
                    window.location.href = "/";; 
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

    render() {
        const { classes } = this.props;
        const handleSignInClick = () => {
            window.location.href = "/";
        };
        return (
                <Box className={classes.container}
                    elevation={3}
                    noValidate
                    autoComplete="off"
                >
                    <Box className={classes.boxform}
                        component="form"
                        onSubmit={this.handleSubmit}
                    >
                    <form onSubmit={this.handleSubmit}>
                    <Box className={classes.TextBox}>
                        <Typography variant='h2'>
                            Register
                        </Typography>
                    </Box>
                    <Box className={classes.inputTextField}>
                        <InputText
                            className={classes.TextBoxInput}
                            placeholder='Username'
                            id='username'
                            fullWidth={true}
                            margin='normal'
                            name='username'
                            onChange={this.handleChange}
                            icon='username'
                        />
                        <InputText
                            className={classes.TextBoxInput}
                            placeholder='Email'
                            type='email'
                            id='email'
                            fullWidth={true}
                            margin='normal'
                            name='email'
                            onChange={this.handleChange}
                            icon='email'
                        />
                        <InputText
                            className={classes.TextBoxInput}
                            placeholder='Password'
                            type='password'
                            id='password'
                            fullWidth={true}
                            margin='normal'
                            name='password'
                            onChange={this.handleChange}
                            icon='password'
                        />
                        <InputText
                            className={classes.TextBoxInput}
                            placeholder='Confirm password'
                            type='password'
                            id='confirmPassword'
                            fullWidth={true}
                            margin='normal'
                            name='confirmPassword'
                            onChange={this.handleChange}
                            icon='password'
                            error={!!this.state.confirmPasswordError}
                            helperText={this.state.confirmPasswordError}
                        />
                        
                    </Box>
                        <Button className={classes.registerButton}
                            variant="contained"
                            type="submit" 
                            onClick={this.handleSubmit}
                            disabled={!this.state.password ||
                                !this.state.confirmPassword ||
                                this.state.password !== this.state.confirmPassword}
                        >
                            Register
                        </Button>
                        <Box  className={classes.AccountBox}>
                            <Typography variant="body1">
                                Already have an account?
                            </Typography>
                            <Button className={classes.signinButton}
                                color="primary"
                                onClick={handleSignInClick}
                            >
                                Sign In
                            </Button>
                        </Box>
                        <Snackbar anchorOrigin={{vertical: 'bottom', horizontal:'center',}} open={this.state.snackbarOpen} autoHideDuration={2000} onClose={this.handleCloseSnackbar}>
                            <MuiAlert elevation={6} variant="filled" onClose={this.handleCloseSnackbar} severity={this.state.snackbarSeverity}>
                                {this.state.snackbarMessage}
                            </MuiAlert>
                        </Snackbar>
                    </form>
                </Box>
            </Box>
        );
    }
}

export default withStyles(Register);
