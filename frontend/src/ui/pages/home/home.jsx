import React from "react";
import HomeTab from "./components/hometap";
import Navbar from "../../modules/components/navbar.jsx";
import { ShareImageProvider } from "../uploadReceipt/components/shareImageContext.js";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
    };
  }
  componentDidMount() {
    console.log(window.localStorage.getItem("auth_user"));
  }

  render() {
    return (
      <ShareImageProvider>
        <Navbar />
        <HomeTab />
      </ShareImageProvider>
    );
  }
}

export default Home;
