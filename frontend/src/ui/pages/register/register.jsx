import React, { Component } from 'react';
import { Box, TextField, Button, Typography, InputAdornment} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Lock';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import withStyles from './style/registerStyle';

class Register extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         first_name: "",
    //         last_name: "",
    //         email: "",
    //         password: "",
    //         confirm_password: ""
    //     }
    //     this.insert = this.register.bind(this);
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }
    // register(e){
    //     const link = "http://localhost:3000/register";
    //     console.log(link);
    //     fetch(link, {
    //         method: "POST",
    //         headers: {
    //             "content-type": "application/json",
    //         },
    //         body: JSON.stringify({
    //             first_name: this.state.first_name,
    //             last_name: this.state.last_name,
    //             email: this.state.email,
    //             password: this.state.password,
    //             confirm_password: this.state.confirm_password
    //         }),
    //     })
    //     .then(response => response.text())
    //     .then(data =>{
    //         console.log(data);
    //         if(data === 'successfully registered!'){
    //             alert(data);
    //             window.location = '/login';
    //         }
    //         else{
    //             alert(data);
    //         }
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //         alert(err);
    //     });
    // }
    // handleChange(e){
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }
    // handleSubmit(e){
    //     e.preventDefault();
    //     this.register(e);
    // }

    state = {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // Handle registration logic here.
        console.log(this.state);
    }
    render() {
        const { username,email, password, confirmPassword } = this.state;
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
                        <TextField
                            className={classes.TextBoxInput}
                            placeholder='Username'
                            id='username'
                            fullWidth
                            margin="normal"
                            name="username"
                            // value={username}
                            onChange={this.handleChange}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountBoxIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            className={classes.TextBoxInput}
                            placeholder='Email'
                            type="email"
                            id='email'
                            fullWidth
                            margin="normal"
                            name="email"
                            value={email}
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
                            className={classes.TextBoxInput}
                            placeholder='Password'
                            type='password'
                            id='password'
                            fullWidth
                            margin="normal"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PasswordIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            className={classes.TextBoxInput}
                            placeholder='Confirm password'
                            type='password'
                            id='confirm_password'
                            fullWidth
                            margin="normal"
                            name="confirmPassword"
                            value={confirmPassword}
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
                        <Button className={classes.registerButton}
                            variant="contained"
                            type="submit" >
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
                    </form>
                </Box>
            </Box>
        );
    }
}

export default withStyles(Register);