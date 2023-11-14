import { Box, Button, Paper, Typography } from '@mui/material'
import React, { useEffect }from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import useStyles from '../style/paymentSuccessfulStyle';

function PaymentSuccessful() {
  const classes = useStyles()

  return (
    <Box sx={{padding: '30px 30px'}}>
      <Paper className={classes.cover}>
        <Box sx={{textAlign: 'center'}}>
        <CheckCircleIcon className={classes.icon}>
        </CheckCircleIcon>
          <Typography variant='h4' sx={{color: ' #FFB53B'}}>
            Waiting for approval
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
        <Box className={classes.amount}>
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
      <Button className={classes.goHomeButton} href='/home'>
        <Typography>
          Go to Home Page
        </Typography>
      </Button>
    </Box>
  )
}

export default PaymentSuccessful