import React, { Component } from 'react';
import { Box, Button, Typography} from '@mui/material';
import InputText from './components/inputText';
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
        e.preventDefault();
        if (this.state.password !== this.state.confirmPassword) {
            this.setState({confirmPasswordError: "Passwords do not match."})
        } else {
            this.setState({confirmPasswordError: ""})
        }
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
                        <InputText
                            className={classes.TextBoxInput}
                            placeholder='Username'
                            id='username'
                            fullWidth={true}
                            margin='normal'
                            name='username'
                            onChange={this.handleChange}
                            icon='username'
                            required
                        />
                        <InputText
                            className={classes.TextBoxInput}
                            placeholder='Email'
                            type='email'
                            id='email'
                            fullWidth={true}
                            margin='normal'
                            name='email'
                            // value={email}
                            onChanges={this.handleChange}
                            icon='email'
                            required
                        />
                        <InputText
                            className={classes.TextBoxInput}
                            placeholder='Password'
                            type='password'
                            id='password'
                            fullWidth={true}
                            margin='normal'
                            name='password'
                            value={password}
                            onChange={this.handleChange}
                            icon='password'
                            required
                        />
                        <InputText
                            className={classes.TextBoxInput}
                            placeholder='Confirm password'
                            type='password'
                            id='confirmPassword'
                            fullWidth={true}
                            margin='normal'
                            name='confirmPassword'
                            value={confirmPassword}
                            onChange={this.handleChange}
                            icon='password'
                            required
                            error={!!this.state.confirmPasswordError}
                            helperText={this.state.confirmPasswordError}
                        />
                        
                    </Box>
                        <Button className={classes.registerButton}
                            variant="contained"
                            type="submit" 
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
                    </form>
                </Box>
            </Box>
        );
    }
}

export default withStyles(Register);