import React from "react";
import Navbar from "../../modules/components/navbar";
import PendingBills from "./component/pendingBillTab";
import { request } from "../../../helpers/axios_helper";

class pendingBill extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          bills : [],
        }
    }

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);

    fetchBillDetails = () =>{
      const billId = window.location.pathname.split("/")[2]
      const uid = JSON.parse(localStorage.getItem("auth_user")).id;
      console.log(billId)
      request(
        "GET", 
        "/"+uid+"/bills/"+billId, 
      ).then((response) => {
        console.log(response.data)
        this.setState({bills: response.data})
      }
      ).catch((error) => {
        console.log(error)
      })
    }

    componentDidMount() {
      this.fetchBillDetails()
    }

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
