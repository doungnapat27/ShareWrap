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
      const response = await request('GET', '/' + uid + '/bills')
      setUserBills(response.data)
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
    <Paper className={classes.cover}>
      <Box>
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
        Created by Bill's owner name on 10 Feb 2022
      </Typography>
      <Typography sx={{ fontSize: '12px', color: '#838383', marginBottom: '10px' }}>
        Transaction ID: 12345
      </Typography>
      <Button href="/view-receipt" fullWidth className={classes.payButton}>
        <Typography variant='h5'>
          See payment details
        </Typography>
      </Button>
      </Box>
    </Paper>
  ) : (
    <Box>
      {userBills.map((userBill) =>(
        <Paper className={classes.cover}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant='h4'>{userBill.billName}</Typography>
        <Box sx={{ padding: '6px' }}>
          {!userBill.isPaid ?(
                      <Typography variant='h5' className={classes.pendingText}>
                      Pending
                    </Typography>
          ) : !userBill.isApprove ?(
            <Typography variant='h5' className={classes.pendingText}>
            Waiting for approval
          </Typography>
          ) : ( 
          <Typography variant='h5' className={classes.pendingText}>
            Approved
          </Typography>
          )}
        </Box>
      </Box>
      <Typography variant='h3'>฿ {userBill.shareTotal}</Typography>
      <Typography className={classes.smallTextFrist}>
        Created by {userBill.billOwnerName} on {userBill.billCreatedDate}
        {/* Created by Bill’s owner name on 10 Feb 2022 */}
      </Typography>
      <Typography
        sx={{ fontSize: '12px', color: '#838383', marginBottom: '10px' }}
      >
        Transaction ID: {userBill.id}
      </Typography>
      <Button href='/upload-receipt' fullWidth className={classes.payButton}>
        <Typography variant='h5'>Pay</Typography>
      </Button>
      </Paper>
      ))}
    </Box>
  )
}

export default PendingBills
