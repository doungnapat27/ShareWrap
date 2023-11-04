import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Lock';

const inputText = ({icon, error,helperText, ...props}) => {
    const StartAdornment = () => {
        switch (icon) {
            case 'username':
                return <AccountBoxIcon/>;
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
            error={error}
            helperText={helperText}
            // required
        />
    );
};

export default inputText;