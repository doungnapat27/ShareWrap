import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import { 
  Box,
} from '@mui/material'

const generatePayload = require('promptpay-qr');

function GeneratePromptPayQR() {
  const [ phoneNumber, setPhoneNumber ] = useState("0630911313");
  const [ amount, setAmount ] = useState(10000);         
  const [ qrCode ,setqrCode ] = useState("");

  function handleQR() {
    setqrCode(generatePayload(phoneNumber, { amount }));
  }
  return(
    <Box>
      <button onClick={handleQR}>Generate Promptpay QR</button>
      <QRCode value={qrCode}/>
    </Box>
   );
}

export default GeneratePromptPayQR