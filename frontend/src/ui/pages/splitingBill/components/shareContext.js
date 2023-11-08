import React, {useState, createContext } from 'react'

export const ShareContext = createContext()

export const ShareContextProvider = ({ children }) => {
  const [isBankAcc, setIsBankAcc] = useState(true);
  const [isPromptPay, setIsPromptPay] = useState(false);

  const handleChangeIsProptPay = () => {
    setIsBankAcc(false);
    setIsPromptPay(true);
    console.log('handleChangeBankAcc: ', isBankAcc, isPromptPay)
  };

  const handleChangeBankAcc = () => {
    setIsBankAcc(true);
    setIsPromptPay(false);
    console.log('handleChangeBankAcc: ', isBankAcc, isPromptPay)
  };

  return (
    <ShareContext.Provider
      value={{
        isBankAcc,
        isPromptPay,
        handleChangeBankAcc,
        handleChangeIsProptPay,
      }}
    >
      {children}
    </ShareContext.Provider>
  )
}