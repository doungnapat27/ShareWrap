import { Box, Button, Paper, Typography } from '@mui/material'
import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function PaymentSuccessful() {
  return (
    <Box sx={{padding: '30px 30px'}}>
      <Paper sx={{padding: '30px ', borderRadius: '30px'}}>
        <Box sx={{textAlign: 'center'}}>
        <CheckCircleIcon sx={{fontSize: '60px', color: '#34C759'}}>
        </CheckCircleIcon>
          <Typography variant='h4' sx={{color: ' rgba(0, 94, 9, 0.80)'}}>
            Payment Successful
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
          <Box>
            <Typography sx={{padding: '16px 0px'}}>
              Transaction ID
            </Typography>
            <Typography>
              Bill name
            </Typography>
            <Typography sx={{padding: '16px 0px'}}>
              Owner Name
            </Typography>
            <Typography>
              Paying date
            </Typography>
          </Box>
          <Box sx={{textAlign: 'right'}}>
            <Typography sx={{padding: '16px 0px'}}>
              12345
            </Typography>
            <Typography>
              Eiei
            </Typography>
            <Typography sx={{padding: '16px 0px'}}>
              Owner's name
            </Typography>
            <Typography>
              DD/MM/YY HH:MM
            </Typography>
          </Box>
        </Box>
        <Box sx={{borderBottom: 1, color: '#DEDEDE', padding: '12px 0px'}}/>
        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
          <Typography variant='h4'  sx={{paddingTop: '16px'}}>
            Amount
          </Typography>
          <Box sx={{textAlign: 'right'}}>
            <Typography variant='h4' sx={{paddingTop: '16px'}}>
              300 ฿
            </Typography>
          </Box>
        </Box>
      </Paper>
      <Button sx={{width: '100%', 
          backgroundColor: '#FFB53B', 
          color: 'black', 
          borderRadius: '10px', 
          paddingTop: '15px', 
          paddingBottom: '15px',
          marginTop: '20px'}}>
        <Typography>
          Go to Home Page
        </Typography>
      </Button>
    </Box>
  )
}

export default PaymentSuccessful