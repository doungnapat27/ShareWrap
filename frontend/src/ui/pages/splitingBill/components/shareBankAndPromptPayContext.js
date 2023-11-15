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
    promptpayId: '',
    bankAccId: '',
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

  const fetchPromptpay = async () => {
    try {
      const response = await request(
        'GET',
        '/'+uid+'/promptpay',
      )
      setUserPayment((prevState) => ({
        ...prevState,
        promptpayName: response.data.name,
        promptpayNumber: response.data.phoneNumber,
        promptpayId: response.data.id,
        selectedPromptPay: true,
      }))
    } catch (error) {
      console.log(error);
    }
  }

  const fetchBankAccount = async () => {
    try {
      const response = await request(
        'GET',
        '/'+uid+'/bank-account',
      )
      setUserPayment((prevState) => ({
        ...prevState,
        bankName: response.data.bankName,
        bankAccount: response.data.name,
        bankAccNumber: response.data.accountNumber,
        bankAccId: response.data.id,
        selectedBankAccount: true,
      }))
    } catch (error) {
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

  const handleUpdatePromptpay = async event => {
    event.preventDefault();
    console.log('Updating promptpay...');
    setUserPayment((prevState) => ({
      ...prevState,
      selectedPromptPay: true,
    }))
    try{
      const response = await request(
        'PUT',
        '/update/promptpay',
        {
          name: userPayment.promptpayName,
          userId: uid,
          phoneNumber: userPayment.promptpayNumber,
          id: userPayment.promptpayId,
        }
      )
      
      setSnackbarOpen(true)
      setSnackbarMessage('Promptpay updated successfully!')
      setSnackbarSeverity('success')

      setTimeout(() => {
        fetchPromptpay();
        window.location.href = '/splitting-bill'; 
      }, 2000); 

    } catch (error) {
      setSnackbarOpen(true)
      setSnackbarSeverity('error')
      setSnackbarMessage('Error updating Promptpay!:', error.response.message)
      console.log(error);
    }

  }

  const handleUpdateBankAccount = async event => {
    event.preventDefault();
    console.log('Updating bank account...');
    setUserPayment((prevState) => ({
      ...prevState,
      selectedBankAccount: true,
    }))
    try{
      const response = await request(
        'PUT',
        '/update/bank-account',
        {
          name: userPayment.bankAccount,
          userId: uid,
          accountNumber: userPayment.bankAccNumber,
          bankName: userPayment.bankName,
          id: userPayment.bankAccId,
        }
      )
      
      setSnackbarOpen(true)
      setSnackbarMessage('Bank account updated successfully!')
      setSnackbarSeverity('success')

      setTimeout(() => {
        fetchBankAccount();
        window.location.href = '/splitting-bill'; 
      }, 2000); 

    } catch (error) {
      setSnackbarOpen(true)
      setSnackbarSeverity('error')
      setSnackbarMessage('Error updating Bank Account!:', error.response.message)
      console.log(error);
    }
  }

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
        fetchPromptpay,
        fetchBankAccount,
        handleUpdatePromptpay,
        handleUpdateBankAccount,
      }}
    >
      {children}
    </ShareContext.Provider>
  )
}
