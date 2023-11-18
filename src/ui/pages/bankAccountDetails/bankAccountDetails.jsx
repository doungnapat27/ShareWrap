import React from 'react'

import { ShareContextProvider } from '../splitingBill/components/shareBankAndPromptPayContext'

import BankAccDetailsTab from './components/bankAccDetailsTab'
import Navbar from '../../modules/components/navbar'

function BankAccDetails() {
  return (
    <ShareContextProvider>
      <Navbar />
      <BankAccDetailsTab />
    </ShareContextProvider>
  )
}

export default BankAccDetails