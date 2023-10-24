import React from 'react'
import {
  Button, Typography
} from '@mui/material'

import LibraryAddTwoToneIcon from '@mui/icons-material/LibraryAddTwoTone';

function CreateBill() {
  return (
    <Button
      variant='contained'
      fullWidth
      sx={{
        justifyContent: 'space-between',
        padding: '33px 20px',
        borderRadius: '10px'
        }}
      >
      <Typography sx={{ fontWeight: 'bold' }}>
        Create bill
      </Typography>
      <LibraryAddTwoToneIcon />
    </Button>
  )
}

export default CreateBill