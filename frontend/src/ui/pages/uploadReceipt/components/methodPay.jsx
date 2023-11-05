import React from 'react'
import { Box, Typography, Paper, Button } from '@mui/material'
import logoKasikorn from '../../../assets/kasikorn.png'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import Navbar from '../../../modules/components/navbar';

function MethodPay() {
  return (
    <Box p={4}>
      <Typography sx={{marginBottom: '11px'}}>
        1. Copy the account number
      </Typography>
      <Paper 
        sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          padding: '20px 16px',
          marginBottom: '39px',
          borderRadius: '10px'
        }}>
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
          sx={{width: '100%', 
          backgroundColor: '#FFB53B', 
          color: 'black', 
          borderRadius: '10px', 
          paddingTop: '15px', 
          paddingBottom: '15px'
        }}>
        <FileUploadOutlinedIcon sx={{marginRight: '12px'}}/>
        Upload receipt
      </Button>
    </Box>
  )
}

export default MethodPay