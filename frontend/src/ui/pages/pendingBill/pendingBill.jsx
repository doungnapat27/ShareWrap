import React from "react";
import Navbar from "../../modules/components/navbar";
import PendingBills from "./component/pendingBillTab";
import { request } from "../../../helpers/axios_helper";
import CircularProgress from "@mui/material/CircularProgress";

class pendingBill extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          bill : {},
          isLoading: true,
        }
    }

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);

    fetchBillDetails = () =>{
      const billId = window.location.pathname.split("/")[2]
      const uid = JSON.parse(localStorage.getItem("auth_user")).id;
      request(
        "GET", 
        "/"+uid+"/bills/"+billId, 
      ).then((response) => {
        this.setState({ bill: response.data, isLoading: false });
      }
      ).catch((error) => {
        console.log(error)
        this.setState({ isLoading: false });
      })
    }

    componentDidMount() {
      this.fetchBillDetails()
    }

    render() {
      if (this.state.isLoading) {
        return <CircularProgress/>; 
    }
        return (
            <>
                <Navbar/>
                <PendingBills bill={this.state.bill}/>
            </>
        )
    }
}

export default pendingBill
