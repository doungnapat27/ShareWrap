import React, { useEffect } from "react";
import { Avatar, Box, Checkbox, Typography } from "@mui/material";
import useStyles from "../../addFriend/style/friendListStyle";
import { stringAvatar } from "../../../../helpers/avatar_helper";

function SearchFriendList({
  friends,
  selectedFriends,
  setSelectedFriends,
  setSelectedFriendsId,
  selectedFriendsId,
}) {
  useEffect(() => {
    const storedSelectedFriends =
      JSON.parse(localStorage.getItem("selectedFriends")) || [];
    const storedSelectedFriendsId = new Set(
      JSON.parse(localStorage.getItem("selectedFriendsId")) || []
    );
    setSelectedFriends(storedSelectedFriends);
    setSelectedFriendsId([...storedSelectedFriendsId]);
  }, [setSelectedFriends, setSelectedFriendsId]);

  const handleToggle = (friend) => {
    const currentIndex = selectedFriends.indexOf(friend.username);
    let newChecked = [...selectedFriends];
    let newCheckedId = new Set([...selectedFriendsId]);

    if (currentIndex === -1) {
      newChecked.push(friend.username);
      newCheckedId.add(friend.id);
    } else {
      newChecked.splice(currentIndex, 1);
      newCheckedId.delete(friend.id);
    }

    setSelectedFriends(newChecked);
    setSelectedFriendsId([...newCheckedId]);
    localStorage.setItem(
      "selectedFriendsId",
      JSON.stringify([...newCheckedId])
    );
  };

  const classes = useStyles();
  return (
    <Box className={classes.searchCover}>
      {friends.map((friend) => (
        <Box className={classes.container}>
          <Box className={classes.friendContainer}>
            <Box className={classes.nameContainer}>
              <Avatar {...stringAvatar(friend.id)} />
              <Typography variant="h4" style={{ marginLeft: "1rem" }}>
                {friend.id}
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default SearchFriendList;
