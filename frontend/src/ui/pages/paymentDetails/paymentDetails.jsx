import React from "react";
import Navbar from "../../modules/components/navbar";
import PaymentDetailsTab from "./components/paymentDetailsTab";
import { ShareContextProvider } from "../splitingBill/components/shareContext";

function PaymentDetails() {
  return (
    <ShareContextProvider>
      <Navbar />
      <PaymentDetailsTab />
    </ShareContextProvider>
  );
}

export default PaymentDetails;
