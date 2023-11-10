import React, {useState, createContext, useEffect} from 'react'

export const ShareContext = createContext()

export const ShareContextProvider = ({ children }) => {
  const storedUserPayment = JSON.parse(localStorage.getItem('userPayment'));

  const [isBankAcc, setIsBankAcc] = useState(true);
  const [isPromptPay, setIsPromptPay] = useState(false);

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
    localStorage.removeItem('userPayment');
  }, [userPayment]);

  const handleChangeIsProptPay = () => {
    setIsBankAcc(false);
    setIsPromptPay(true);
  };

  const handleChangeSelectedPromptpay = () => {
    setUserPayment((prevState) => ({
      ...prevState,
      selectedPromptPay: true,
    }))
  }

  const handleChangeSelectedBankAccount = () => {
    setUserPayment((prevState) => ({
      ...prevState,
      selectedBankAccount: true,
    }))
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
        handleChangeSelectedBankAccount,
        handleChangeSelectedPromptpay,
      }}
    >
      {children}
    </ShareContext.Provider>
  )
}