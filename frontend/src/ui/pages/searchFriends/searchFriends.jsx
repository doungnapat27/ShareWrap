import React from "react";
import Navbar from "../../modules/components/navbar";
import SearchFriendTab from "./component/searchFriendsTab";

class SearchFriend extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <SearchFriendTab/>
      </>
    );
  }
}
export default SearchFriend;
