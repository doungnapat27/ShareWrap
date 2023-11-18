import React from "react";
import ViewRecepitTab from "./components/viewReceiptTab";
import Navbar from "../../modules/components/navbar";
import { ShareImageProvider } from "../uploadReceipt/components/shareImageContext";
function ViewReceipt() {
  return (
    <ShareImageProvider>
      <Navbar />
      <ViewRecepitTab />
    </ShareImageProvider>
  );
}

export default ViewReceipt;
