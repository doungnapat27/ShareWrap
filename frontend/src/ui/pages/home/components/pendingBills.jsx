import { Card, Paper, Box, Typography, Button } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import useStyles from '../../../pages/home/style/penddingBillsStyle'
import { ShareImageContext } from '../../uploadReceipt/components/shareImageContext'

function PendingBills() {
  const classes = useStyles()
  const {
    uploadImage,
    showImage,
  } = useContext(ShareImageContext)

  console.log('showImage in pendingBills compo', showImage)
  const storedShowImage = JSON.parse(localStorage.getItem('showImage'));
  console.log(storedShowImage)
  return (
    storedShowImage ? (
      <Paper className={classes.cover}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant='h4'>Eiei</Typography>
          <Box sx={{ padding: '6px' }}>
            <Typography variant='h5' className={classes.pendingText}>
              Waiting for approval
            </Typography>
          </Box>
        </Box>
        <Typography variant='h3'>฿ 300</Typography>
        <Typography className={classes.smallTextFrist}>
          Created by Bill’s owner name on 10 Feb 2022
        </Typography>
        <Typography sx={{ fontSize: '12px', color: '#838383', marginBottom: '10px' }}>
          Transaction ID: 12345
        </Typography>
        <Button href="/view-receipt" fullWidth className={classes.payButton}>
          <Typography variant='h5'>
            See payment details
          </Typography>
        </Button>
      </Paper>
    ) : (
      <Paper className={classes.cover}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant='h4'>Eiei</Typography>
          <Box sx={{ padding: '6px' }}>
            <Typography variant='h5' className={classes.pendingText}>
              Pending
            </Typography>
          </Box>
        </Box>
        <Typography variant='h3'>฿ 300</Typography>
        <Typography className={classes.smallTextFrist}>
          Created by Bill’s owner name on 10 Feb 2022
        </Typography>
        <Typography sx={{ fontSize: '12px', color: '#838383', marginBottom: '10px' }}>
          Transaction ID: 12345
        </Typography>
        <Button href="/upload-receipt" fullWidth className={classes.payButton}>
          <Typography variant='h5'>
            Pay
          </Typography>
        </Button>
      </Paper>
    )
  )
}

export default PendingBills
