import React, { Component } from 'react';
import { Box, TextField, Button, Typography, InputAdornment, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Lock';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import backgroundImg from "..//../assets/BG.svg";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { darken } from '@mui/system';


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
        firstName: '',
        lastName: '',
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
        const { firstName, lastName,email, password, confirmPassword } = this.state;
        return (
                <Box
                    elevation={3}
                    sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',  
                    backgroundImage: `url(${backgroundImg})`,     
                    backgroundSize: '250%',
                    backgroundPosition: 'center',
                    borderRadius: 2,
                    boxShadow: 3,
                    position: 'absolute',      
                    top: '50%',                
                    left: '50%',               
                    transform: 'translate(-50%, -50%)' 
                    }}
                    noValidate
                    autoComplete="off"
                >  
                    <IconButton
                        sx={{
                            position: 'absolute',
                            top: 30, 
                            left: 18, 
                            zIndex: 3, 
                        }}
                        onClick={() => {
                            // Handle the back action. This could be history.goBack() if using react-router
                            console.log("Going back...");
                        }}
                    >
                        <ArrowBackIcon />
                    </IconButton>
                    <Box 
                        component="form"
                        onSubmit={this.handleSubmit}
                        sx={{
                            width: '100%',
                            maxWidth: 300,
                            padding: 3,  
                        }}
                    >
                    <form onSubmit={this.handleSubmit}>
                    <Box 
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',  
                            alignItems: 'center',      
                            height: '100%',  
                            marginBottom: 5,   
                            marginTop: 6,       
                        }}
                    >
                        <Typography 
                            sx={{
                                color: 'black',
                                fontSize: 32,
                                fontWeight: 'bold',
                                textAlign: 'center',
                            }}  
                        >
                            Register
                        </Typography>
                    </Box>
                        <TextField 
                            label="First Name" 
                            id='first_name'
                            fullWidth 
                            margin="normal"
                            name="First Name"
                            // value={firstName} 
                            onChange={this.handleChange}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="send">
                                        <AccountBoxIcon />
                                    </InputAdornment>
                                ),
                                style:{
                                    borderRadius: '10px',
                                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                                },
                            }}
                        />
                        <TextField 
                            label="Last Name" 
                            id='last_name'
                            fullWidth 
                            margin="normal"
                            name="Last Name"
                            // value={lastName}
                            onChange={this.handleChange}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountBoxIcon />
                                    </InputAdornment>
                                ),
                                style:{
                                    borderRadius: '10px',
                                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                                },
                            }}
                        />
                        <TextField 
                            label="Email" 
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
                                style:{
                                    borderRadius: '10px',
                                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                                },
                            }}
                        />
                        <TextField 
                            label="Password" 
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
                                style:{
                                    borderRadius: '10px',
                                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                                },
                            }}
                        />
                        <TextField 
                            label="Confirm Password" 
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
                                style:{
                                    borderRadius: '10px',
                                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                                },
                            }}
                        />
                        <Button 
                            variant="contained" 
                            type="submit"
                            sx={{
                                mt: 6,
                                width: '190px', 
                                backgroundColor: '#981E25',    
                                '&:hover': {
                                    backgroundColor: darken('#981E25', 0.15),  
                                },
                                marginLeft: 'auto',  
                                marginRight: 'auto',
                                display: 'block',
                                fontWeight: 'bold',
                                borderRadius: '10px'
                            }}
                        >
                            Register
                        </Button>
                        <Box 
                        sx={{ 
                            mt: 5, 
                            display: 'flex', 
                            justifyContent: 'center', 
                            alignItems: 'center', 
                            }}>
                            <Typography variant="body1">
                                Already have an account?
                            </Typography>
                            <Button 
                                color="primary" 
                                sx={{
                                    textTransform: 'none', 
                                    color: '#981E25',
                                    textDecoration: 'underline',
                                    fontWeight: 'bold',
                                    '&:hover': {
                                        textDecoration: 'underline',  
                                        backgroundColor: 'transparent',
                                    }
                                }} 
                                onClick={() => {
                                    // Handle the sign-in action. Navigate to the sign-in page or show the sign-in modal.
                                }}
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

export default Register;