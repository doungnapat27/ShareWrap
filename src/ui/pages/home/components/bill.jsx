import React from 'react'

import { Box, Typography, Paper, Button, Card, Grid } from '@mui/material'

import AccountCircle from '@mui/icons-material/AccountCircle'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { useState, useEffect } from 'react'
import { request } from '../../../../helpers/axios_helper'
import useStyles from '../../../pages/home/style/penddingBillsStyle'

function Bill() {
  const classes = useStyles()
  const [bills, setBills] = useState([])
  const uid = JSON.parse(localStorage.getItem('auth_user')).id

  const fetchBills = async () => {
    try {
      const response = await request('GET', '/' + uid + '/bills')
      const formattedBills = response.data.map(bill => {
        // Assuming the date in millis is stored in a field like billDate
        const date = new Date(bill.createdDate);

        // Formatting the date
        const day = date.getUTCDate();
        const month = date.toLocaleString('en-US', { month: 'short' });
        const year = date.getUTCFullYear();

        // Construct the formatted date string
        bill.createdDate = `${day} ${month} ${year}`;
        return bill;
      })
      setBills(formattedBills)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchBills()
  }, [])

  return (
    <Box>
      {bills.map(bill => (
        <Paper className={classes.cover}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant='h4'>{bill.name}</Typography>
            <Box sx={{ padding: '6px' }}>
              {!bill.isPaid &&(
                <Typography variant='h5' className={classes.pendingText}>
                  Not Recieved
                </Typography>
              )}
            </Box>
          </Box>
          <Typography variant='h3'>฿ {(bill.total).toFixed(2)}</Typography>
          <Typography className={classes.smallTextFrist}>
            Created on {bill.createdDate}
          </Typography>
          <Typography
            sx={{ fontSize: '12px', color: '#838383', marginBottom: '10px' }}
          >
            Transaction ID: {bill.id}
          </Typography>
          <Button
            fullWidth
            className={classes.payButton}
          >
            <Typography variant='h5'>See payment details</Typography>
          </Button>
        </Paper>
      ))}
    </Box>
  )
}

export default Bill
