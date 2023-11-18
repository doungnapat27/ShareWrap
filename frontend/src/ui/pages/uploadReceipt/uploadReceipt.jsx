import React from "react";
import MethodPay from "./components/methodPay";
import Navbar from "../../modules/components/navbar";
import { ShareImageProvider } from "./components/shareImageContext";

function UploadReceipt() {
  return (
    <ShareImageProvider>
      <Navbar />
      <MethodPay />
    </ShareImageProvider>
  );
}

export default UploadReceipt;
