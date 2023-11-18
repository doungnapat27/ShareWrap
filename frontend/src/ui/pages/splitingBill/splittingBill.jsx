import React from "react";
import Navbar from "../../modules/components/navbar";
import MemoSplitingBillTab from "./components/splittingBillTab";
import { ShareContextProvider } from "./components/shareBankAndPromptPayContext";

function SplitingBill() {
  return (
    <ShareContextProvider>
      <Navbar />
      <MemoSplitingBillTab />
    </ShareContextProvider>
  );
}

export default SplitingBill;
