import React from 'react'
import {
  Box,
  Typography,
  Button,
} from '@mui/material'

function BillOption() {
  return (
    <Box>
      <Box>
        <Box>
          <Typography variant='h5'>
            Manual Bill splitting
          </Typography>
          <Typography sx={{ fontSize: '12px' }}>
            Share difference expense with friends
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default BillOption