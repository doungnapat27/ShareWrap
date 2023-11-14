import React, { useState } from 'react'

import {
  Box,
  Typography,
  Paper,
  Button,
} from '@mui/material'

import logoKasikorn from '../../../assets/kasikorn.png'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import GeneratePromptPayQR from '../../../modules/components/QRCode';

import useStyles from '../style/uploadReceiptStyle';

function MethodPay() {
  const classes = useStyles()
  const [isBankAcc, setIsBankAcc] = useState(false)
  // const [isPromptPay, setIsPromptPay] = useState(false)

  return (
    <Box p={4}>
      <Box>
        {isBankAcc ? (
          <Box>
            <Typography sx={{ marginBottom: '11px' }}>
              1. Copy the account number
            </Typography>
            <Paper className={classes.cover}>
              <Box sx={{ display: 'flex' }}>
                <Box>
                  <img src={logoKasikorn} width='50px' height='50px' />
                </Box>
                <Box ml={1} sx={{ alignSelf: 'center' }}>
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
          </Box>
        ) : (
          <Box>
            <Typography sx={{ marginBottom: '11px' }}>
              1. Save QR Code
            </Typography>
            <Paper sx={{ backgroundColor: 'rgba(255, 255, 255, 0.70)', padding: '20px 30px', textAlign: 'center', margin: '15px 0px'}}>
              <GeneratePromptPayQR sx={{}}>
              </GeneratePromptPayQR>
              <Typography variant='h4' sx={{marginTop: '15px'}}>฿ 300</Typography>
              <Typography>Name of the owner QR code</Typography>
              <Typography>xx-xxxx-1234</Typography>
              <Button 
                startIcon={<SaveAltIcon />}
                sx={{
                  paddingTop: '12px', 
                  paddingBottom: '12px',
                  paddingLeft: '16px', 
                  border: '3px solid var(--status-pending, #FFB53B)',
                  color: '#FFB53B',
                  borderRadius: '10px',
                  margin: '15px 0px',
                  backgroundColor: '#FFF'
                }}
              >
                <Typography>Save QR Code</Typography>
              </Button>
            </Paper>
          </Box>
        )}
        <Typography sx={{ marginBottom: '42px' }}>
          2. Go to transfer via your mobile banking
        </Typography>
        <Typography sx={{ marginBottom: '11px' }}>
          3. Upload your receipt
        </Typography>
        <Button href='/receipt-uploaded'
          className={classes.uploadReceiptButton}>
          <FileUploadOutlinedIcon sx={{ marginRight: '12px' }} />
          Upload receipt
        </Button>
      </Box>
    </Box>
  )
}

export default MethodPay