import React from 'react'
import Navbar from '../../modules/components/navbar'
import SplitingBillTab from './components/splittingBillTab'
import MemoSplitingBillTab from './components/splittingBillTab'
import { ShareContextProvider } from './components/shareContext'

function SplitingBill() {
  return (
    <ShareContextProvider>
      <Navbar />
      <MemoSplitingBillTab />
    </ShareContextProvider>
  )
}

export default SplitingBill