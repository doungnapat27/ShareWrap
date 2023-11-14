import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
} from '@mui/material'

import { ShareImageContext } from './shareImageContext';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

function UploadImage() {
  const {
    uploadImage,
    handleUploadFile,
    handleChange,
    showImage,
  } = useContext(ShareImageContext)

  const navigate = useNavigate();

  return (
    <Box mt={4}>
      <input
        type="file"
        id="file-upload"
        accept="image/*"
        onChange={handleUploadFile}
      />
      {console.log('upload image in upload compo' ,uploadImage)}
      {console.log('show image in upload compo' ,showImage)}

      <Button
        onClick={handleChange}
        disabled={uploadImage === null}
        href='/receipt-uploaded'
        sx={{
          width: '100%',
          backgroundColor: uploadImage === null ? '#838383' : '#FFB53B',
          color: uploadImage === null ? 'white !important' : 'black !important',
          borderRadius: '10px',
          paddingTop: '15px',
          paddingBottom: '15px',
          boxShadow: '1',
          marginTop: '20px',
        }}
      >
        <FileUploadOutlinedIcon />
        Upload image
      </Button>
    </Box>
  )
}

export default UploadImage