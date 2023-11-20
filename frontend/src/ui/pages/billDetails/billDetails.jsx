import React from "react";
import Navbar from "../../modules/components/navbar";
import BillDetailsTab from "./component/billDetailsTab";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function BillDetails() {
  return (
    <>
      <Navbar />
      <BillDetailsTab/>
    </>
  );
}

export default BillDetails;
