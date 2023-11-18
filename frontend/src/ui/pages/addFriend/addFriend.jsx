import React from "react";
import Navbar from "../../modules/components/navbar";
import AddFriendTab from "./components/addFriendTab";

class addFriend extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <AddFriendTab />
      </>
    );
  }
}

export default addFriend;
