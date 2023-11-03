import { Card, Paper, Box, Typography, Button} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


function PendingBills() {
  return (
    <Paper sx={{ padding: '12px 32px', backgroundColor: 'rgba(255, 181, 59, 0.50);', borderRadius: '10px'}}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant='h4'>Eiei</Typography>
        <Box sx={{ padding: '6px' }}>
          <Typography variant='h5' 
            sx={{
              backgroundColor: 'white', 
              padding: '5px 17px',
              borderRadius: '5px'
            }}>
            Pending
          </Typography>
        </Box>
      </Box>
      <Typography variant='h3'>฿ 300</Typography>
      <Typography sx={{fontSize: '12px', color: '#838383', paddingTop: '10px', paddingBottom: '10px'}}>
        Created by Bill’s owner name on 10 Feb 2022
      </Typography>
      <Button href="/upload-receipt" fullWidth sx={{ backgroundColor: '#FFB53B', color: '#000', paddingTop: '15px', paddingBottom: '15px'}}>
        <Typography variant='h5'>
          Pay
        </Typography>
      </Button>
    </Paper>
  )
}

export default PendingBills