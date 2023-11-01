import React from 'react'

import Navbar from '../../modules/components/navbar'
import TabInCreateBill from './ui/components/tabInCreateBill.jsx'
import BillOption from './ui/components/billOption/billOption'

function CreateBill() {
  return (
    <>
      <Navbar />
      <TabInCreateBill />
    </>
  )
}

export default CreateBill