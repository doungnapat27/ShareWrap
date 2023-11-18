import { BrowserRouter, Routes, Route } from "react-router-dom";
import './global.css'
import theme from "./theme.js";
import './font.css'
import { ThemeProvider } from "@mui/material";

import Login from "../src/ui/pages/login/login.jsx";
import Register from "../src/ui/pages/register/register.jsx";
import Home from "./ui/pages/home/home.jsx";
import CreateBill from "./ui/pages/createBill/createBill.jsx";
import PageNotFound from '../src/ui/pages/pageNotFound'
import UploadReceipt from "./ui/pages/uploadReceipt/uploadReceipt.jsx";
import ReceiptBillUpload from "./ui/pages/receiptBillUpload/receiptBillUpload.jsx"
import SplitingBill from "./ui/pages/splitingBill/splittingBill.jsx";
import AddFriend from "./ui/pages/addFriend/addFriend.jsx";
import SummaryBill from ".//ui/pages/summaryBill/summaryBill.jsx"
import ProtectedRoute from "./ui/modules/components/protectedRoute.jsx";

import PromptPayDetails from "./ui/pages/promptpayDetails/promptpayDetails.jsx";
import BankAccDetails from "./ui/pages/bankAccountDetails/bankAccountDetails.jsx";
import EditBankAccount from "./ui/pages/editBankAccount/editBankAccount.jsx";
import EditPromptpay from "./ui/pages/editPromptpay/editPromptpay.jsx";
import ViewReceipt from "./ui/pages/viewReceipt/viewReceipt.jsx";
import BillSummary from "./ui/pages/billSummary/billSummary"
import PaymentDetails from "./ui/pages/paymentDetails/paymentDetails.jsx";


function App() {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route element={<ProtectedRoute />}> */}
            <Route path="/home/:id" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/splitting-bill" element={<SplitingBill />}/>
            <Route path="promptpay-details" element={<PromptPayDetails />} />
            <Route path="edit-promptpay" element={<EditPromptpay />} />
            <Route path="bank-account-details" element={<BankAccDetails />} />
            <Route path="edit-bank-account" element={<EditBankAccount />} />
            <Route path="/upload-receipt" element={<UploadReceipt />} />
            <Route path="/receipt-uploaded" element={<ReceiptBillUpload />} />
            <Route path="/view-receipt" element={<ViewReceipt />} />
            <Route path="/add-Friend" element={<AddFriend/>} />
          {/* </Route> */}
          {/* <Route path="/create-bill" element={<CreateBill />} /> No longer use */}
          <Route path="/home/" element={<Home />} />
            <Route path="/splitting-bill" element={<SplitingBill />}/>
            <Route path="/:id/upload-receipt/:id" element={<UploadReceipt />} />
            <Route path="/receipt-uploaded/:id" element={<ReceiptBillUpload />} />
            <Route path="/add-Friend" element={<AddFriend/>} />
            <Route path="/summary-bill" element={<SummaryBill/>} />
            <Route path="/bill-summary" element={<BillSummary/>} />
            <Route path="/payment-details" element={<PaymentDetails />} />
          {/* </Route> */}
          {/* <Route path="/create-bill" element={<CreateBill />} /> No longer use */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
