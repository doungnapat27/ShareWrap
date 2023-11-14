import React, { useState } from 'react';
import QRCode from 'react-qr-code'
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
      {/* <Button onClick={handleQR}>Generate Promptpay QR</Button> */}
      <QRCode value={qrCode}/>
    </Box>
   );
}

export default GeneratePromptPayQR