import React from 'react'
import { Box, Typography, Paper, Button } from '@mui/material'
import logoKasikorn from '../../../assets/kasikorn.png'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import Navbar from '../../../modules/components/navbar';
import useStyles from '../style/uploadReceiptStyle';

function MethodPay() {
  const classes = useStyles()
  return (
    <Box p={4}>
      <Typography sx={{marginBottom: '11px'}}>
        1. Copy the account number
      </Typography>
      <Paper className={classes.cover}>
        <Box sx={{ display: 'flex'}}>
          <Box>
            <img src={logoKasikorn} width='50px' height='50px' />
          </Box>
          <Box ml={1} sx={{alignSelf: 'center'}}>
            <Typography variant='h4'>
              Sir Oliver Kobahachi
            </Typography>
            <Typography variant='h5'>
              Kasikram, 0124567892
            </Typography>
          </Box>
        </Box>
        <Box>
          <ContentCopyIcon />
        </Box>
      </Paper>
      <Typography sx={{marginBottom: '42px'}}>
        2. Go to transfer via your mobile banking
      </Typography>
      <Typography sx={{marginBottom: '11px'}}>
        3. Upload your receipt
      </Typography>
        <Button href='/receipt-uploaded'
          className={classes.uploadReceiptButton}>
        <FileUploadOutlinedIcon sx={{marginRight: '12px'}}/>
        Upload receipt
      </Button>
    </Box>
  )
}

export default MethodPay