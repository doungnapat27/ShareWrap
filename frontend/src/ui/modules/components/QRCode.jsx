import React, { useState, useEffect } from 'react'
import QRCode from 'react-qr-code'
import { Box } from '@mui/material'

const generatePayload = require('promptpay-qr')

function GeneratePromptPayQR({phoneNumber, amount}) {

  const [qrCode, setQrCode] = useState('')

  useEffect(() => {
    if (phoneNumber && amount) {
      setQrCode(generatePayload(phoneNumber, { amount }));
    }
  },[phoneNumber, amount])

  return (
    <Box>
      <QRCode value={qrCode} />
    </Box>
  )
}

export default GeneratePromptPayQR
