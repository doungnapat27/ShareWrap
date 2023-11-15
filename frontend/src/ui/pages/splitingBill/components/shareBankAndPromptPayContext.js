import React, {useState, createContext, useEffect} from 'react'
import {request} from '../../../../helpers/axios_helper'

export const ShareContext = createContext()

export const ShareContextProvider = ({ children }) => {
  const storedUserPayment = JSON.parse(localStorage.getItem('userPayment'));

  const [isBankAcc, setIsBankAcc] = useState(true);
  const [isPromptPay, setIsPromptPay] = useState(false);
  
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState('')
  const [snackbarSeverity, setSnackbarSeverity] = useState('success')

  

  const [userPayment, setUserPayment] = useState(storedUserPayment || {
    selectedBankAccount: false,
    bankName: '',
    bankAccount: '',
    bankAccNumber: '',
    selectedPromptPay: false,
    promptpayName: '',
    promptpayNumber: '',
  })



  useEffect(() => {
    localStorage.setItem('userPayment', JSON.stringify(userPayment));
    // localStorage.removeItem('userPayment');
  }, [userPayment]);

  const handleChangeIsProptPay = () => {
    setIsBankAcc(false);
    setIsPromptPay(true);
  };

  const uid = JSON.parse(localStorage.getItem('auth_user')).id;

  const handleAddSelectedPromptpay = async event => {
    event.preventDefault();
    console.log('Adding promptpay...');
    setUserPayment((prevState) => ({
      ...prevState,
      selectedPromptPay: true,
    }))

    try{
      const response = await request(
        'POST',
        '/add/promptpay',
        {
          name: userPayment.promptpayName,
          userId: uid,
          phoneNumber: userPayment.promptpayNumber,
        }
      )
      setSnackbarOpen(true)
      setSnackbarMessage('Promptpay added successfully!')
      setSnackbarSeverity('success')

      setTimeout(() => {
        window.location.href = '/splitting-bill'; 
      }, 2000); 

    } catch (error) {
      setSnackbarOpen(true)
      setSnackbarSeverity('error')
      setSnackbarMessage('Error adding Promptpay!:', error.response.message)
      console.log(error);
    }

  }


  const handleAddSelectedBankAccount = async event => {
    event.preventDefault();
    console.log('Adding bank Account...');
    setUserPayment((prevState) => ({
      ...prevState,
      selectedBankAccount: true,
    }))

    try{
      const response = await request(
        'POST',
        '/add/bank-account',
        {
          name: userPayment.bankAccount,
          userId: uid,
          accountNumber: userPayment.bankAccNumber,
          bankName: userPayment.bankName,
        }
      )
      setSnackbarOpen(true)
      setSnackbarMessage('Bank account added successfully!')
      setSnackbarSeverity('success')

      setTimeout(() => {
        window.location.href = '/splitting-bill'; 
      }, 2000); 

    } catch (error) {
      setSnackbarOpen(true)
      setSnackbarSeverity('error')
      setSnackbarMessage('Error adding Bank Account!:', error.response.message)
      console.log(error);
    }

  }

  const handlePromptpayChange = (type, value) => {
    setUserPayment((prevState) => ({
      ...prevState,
      [type]: value
    }))
  }

  const handleChangeBankAcc = () => {
    setIsBankAcc(true);
    setIsPromptPay(false);
  };

  return (
    <ShareContext.Provider
      value={{
        isBankAcc,
        isPromptPay,
        handleChangeBankAcc,
        handleChangeIsProptPay,
        setIsBankAcc,
        setIsPromptPay,
        userPayment,
        setUserPayment,
        handlePromptpayChange,
        handleAddSelectedBankAccount,
        handleAddSelectedPromptpay,
        snackbarOpen,
        snackbarMessage,
        snackbarSeverity,
        setSnackbarOpen,
      }}
    >
      {children}
    </ShareContext.Provider>
  )
}
