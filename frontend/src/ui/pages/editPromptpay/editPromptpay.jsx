import React from 'react'
import { ShareContextProvider } from '../splitingBill/components/shareBankAndPromptPayContext'
import EditPromptpayTab from './components/editPromptpayTab'
import Navbar from '../../modules/components/navbar'

function EditPromptpay() {
  return (
    <ShareContextProvider>
      <Navbar />
      <EditPromptpayTab />
    </ShareContextProvider>
  )
}

export default EditPromptpay