// ShareImageContext.js
import React, { createContext, useState, useContext } from 'react';
import { request } from '../../../../helpers/axios_helper';

export const ShareImageContext = createContext();

export const ShareImageProvider = ({ children }) => {
  const [uploadImage, setUploadImage] = useState(() => {
    const storedImage = localStorage.getItem('uploadImage');
    return storedImage ? storedImage : null;
  });
  const [showImage, setShowImage] = useState(false);

  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState('')
  const [snackbarSeverity, setSnackbarSeverity] = useState('success')

  const handleUploadFile = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64data = reader.result;
      setUploadImage(base64data);

      try {
        localStorage.setItem('uploadImage', base64data);
        console.log('The image saved into localStorage');
      } catch (error) {
        console.error('Error saving to local storage:', error);
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleChange = async event => {

    event.preventDefault();

    if (uploadImage !== null) {
      setShowImage(true);
      localStorage.setItem('showImage', JSON.stringify(true));
      const now = new Date();
      const formattedTimestamp = [
        padTo2Digits(now.getDate()),
        padTo2Digits(now.getMonth() + 1),
        now.getFullYear().toString().substring(2),
      ].join('/') + ' ' + [
        padTo2Digits(now.getHours()),
        padTo2Digits(now.getMinutes())
      ].join(':');

      try{
        const response = await request(
          'PUT',
          '/isPaid/userBill/'+localStorage.getItem('userBillId'),
        );
        if (response.status === 200) {
          console.log('Bill is paid');
        }
  
        setSnackbarOpen(true)
        setSnackbarMessage(response.data)
        setSnackbarSeverity('success')
  
        setTimeout(() => {
          window.location.href = '/receipt-uploaded/'+localStorage.getItem('userBillId')
        }, 4000); 
      }catch(error){
        setSnackbarOpen(true)
        setSnackbarSeverity('error')
        setSnackbarMessage('Error update payment status')
        console.log(error);
      }
      localStorage.setItem('imageUploadTimestamp', formattedTimestamp);
    }
  };


  function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }

  return (
    <ShareImageContext.Provider
      value={{
        uploadImage,
        handleUploadFile,
        handleChange,
        showImage,
        snackbarOpen,
        snackbarMessage,
        snackbarSeverity,
        setSnackbarOpen,
      }}
    >
      {children}
    </ShareImageContext.Provider>
  );
};
