import React from "react";
import { ShareContextProvider } from "../splitingBill/components/shareBankAndPromptPayContext";
import EditBankTab from "./components/editBankTab";
import Navbar from "../../modules/components/navbar";

function EditBankAccount() {
  return (
    <ShareContextProvider>
      <Navbar />
      <EditBankTab />
    </ShareContextProvider>
  );
}

export default EditBankAccount;
