import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Lock';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

const loginInputText = ({icon, ...props}) => {
    const StartAdornment = () => {
        switch (icon) {
            case 'email':
                return <EmailIcon/>;
            case 'password':
                return <PasswordIcon/>;
            default: return null;
        }
    }
    return (
        <TextField
            {...props}
            InputProps={{
                startAdornment: (
                    <InputAdornment position='start'>
                        <StartAdornment/>
                    </InputAdornment>
                )
            }}
        />
    );
};

export default loginInputText;