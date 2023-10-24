import React from 'react'
import {
  Button, Typography
} from '@mui/material'

import NoteStackAdd from '../../../../assets/note-stack-add.svg'

function CreateBill() {
  return (
    <Button
      variant='contained'
      fullWidth
      sx={{
        justifyContent: 'space-between',
        padding: '33px 20px',
        borderRadius: '10px',
        marginBottom: '30px',
        backgroundColor: 'rgba(152, 30, 37, 0.80)',
        }}
      >
      <Typography
        sx={{
          fontWeight: 'bold',
          fontSize: '20px',
          // fontFamily: 'inter'
          }}
        >
        Create bill
      </Typography>
      <img src={NoteStackAdd} alt='note-stack-add'/>
    </Button>
  )
}

export default CreateBill