import { Paper, Box, Typography, Button } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import useStyles from '../../../pages/home/style/penddingBillsStyle'
import { ShareImageContext } from '../../uploadReceipt/components/shareImageContext'
import { request } from '../../../../helpers/axios_helper'


function PendingBills() {
  const classes = useStyles()
  const { uploadImage, showImage } = useContext(ShareImageContext)

  const uid = JSON.parse(localStorage.getItem('auth_user')).id
  const [userBills, setUserBills] = useState([])


  const fetchUserBills = async () => {
    try {
      const response = await request(
        'GET', 
        '/' + uid + '/userBills'
      )
      const formattedBills = response.data.map(bill => {
        // Assuming the date in millis is stored in a field like billDate
        const date = new Date(bill.billCreatedDate);

        // Formatting the date
        const day = date.getUTCDate();
        const month = date.toLocaleString('en-US', { month: 'short' });
        const year = date.getUTCFullYear();

        // Construct the formatted date string
        bill.billCreatedDate = `${day} ${month} ${year}`;
        return bill;
      })
      setUserBills(formattedBills)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchUserBills()
  }, [])

  console.log('showImage in pendingBills compo', showImage)
  const storedShowImage = JSON.parse(localStorage.getItem('showImage'))
  console.log(storedShowImage)
  return storedShowImage ? (
    <Box>
      {userBills.map(userBill => (
        <Paper className={classes.cover}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant='h4'>{userBill.billName}</Typography>
            <Box sx={{ padding: '6px' }}>
              <Typography variant='h5' className={classes.pendingText}>
                Waiting for approval
              </Typography>
            </Box>
          </Box>
          <Typography variant='h3'>฿ {(userBill.shareTotal).toFixed(2)}</Typography>
          <Typography className={classes.smallTextFrist}>
            Created by {userBill.billOwnerName} on {userBill.billCreatedDate}
          </Typography>
          <Typography
            sx={{ fontSize: '12px', color: '#838383', marginBottom: '10px' }}
          >
            Transaction ID: {userBill.id}
          </Typography>
          <Button href='/view-receipt' fullWidth className={classes.payButton}>
            <Typography variant='h5'>See payment details</Typography>
          </Button>
        </Paper>
      ))}
    </Box>
  ) : (
    <Box>
      {userBills.map(userBill => (
        <Paper className={classes.cover}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant='h4'>{userBill.billName}</Typography>
            <Box sx={{ padding: '6px' }}>
              {!userBill.isPaid ? (
                <Typography variant='h5' className={classes.pendingText}>
                  Pending
                </Typography>
              ) : (
                !userBill.isApprove && (
                  <Typography variant='h5' className={classes.pendingText}>
                    Waiting for approval
                  </Typography>
                )
              )}
            </Box>
          </Box>
          <Typography variant='h3'>฿ {(userBill.shareTotal).toFixed(2)}</Typography>
          <Typography className={classes.smallTextFrist}>
            Created by {userBill.billOwnerName} on {userBill.billCreatedDate}
            {/* Created by Bill’s owner name on 10 Feb 2022 */}
          </Typography>
          <Typography
            sx={{ fontSize: '12px', color: '#838383', marginBottom: '10px' }}
          >
            Transaction ID: {userBill.id}
          </Typography>
          <Button
            // href={userBill.isPaid ? '/view-receipt' : '/upload-receipt'}
            href = {'/'+uid+'/upload-receipt/'+ userBill.id}
            fullWidth
            className={classes.payButton}
          >
            <Typography variant='h5'>Pay</Typography>
          </Button>
        </Paper>
      ))}
    </Box>
  )
}

export default PendingBills
