import React from "react";
import Navbar from '../../modules/components/navbar';
import BillSummaryTab from "./component/billSummaryTab";

function BillSummary() {
    return(
        <>
            <Navbar/>
            <BillSummaryTab/>
        </>
    )
}   

export default BillSummary;