import React from "react";
import Navbar from "../../modules/components/navbar";
import PromptPayDetailsTab from "./components/promptpayDetailsTab";
import { ShareContextProvider } from "../splitingBill/components/shareBankAndPromptPayContext";

function PromptPayDetails() {
  return (
    <ShareContextProvider>
      <Navbar />
      <PromptPayDetailsTab />
    </ShareContextProvider>
  );
}

export default PromptPayDetails;
