import React from "react";
import Navbar from "../../modules/components/navbar";
import PendingBills from "./component/pendingBillTab";

class pendingBill extends React.Component {
    render() {
        return (
            <>
                <Navbar/>
                <PendingBills/>
            </>
        )
    }
}

export default pendingBill