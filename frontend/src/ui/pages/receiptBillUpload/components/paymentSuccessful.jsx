import { Box, Button, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import useStyles from "../style/paymentSuccessfulStyle";
import { request } from "../../../../helpers/axios_helper";
import CircularProgress from "@mui/material/CircularProgress";

function PaymentSuccessful() {
  const classes = useStyles();

  const uid = JSON.parse(localStorage.getItem("auth_user")).id;
  const [userBill, setUserBill] = useState();

  const fetchUserBill = async () => {
    try {
      const response = await request(
        "GET",
        "/" + uid + "/userBills/" + window.location.pathname.split("/")[2]
      );
      // Assuming the date in millis is stored in a field like billDate
      const date = new Date(response.data.uploadedDate);

      // Formatting the date
      const day = date.getUTCDate();
      const month = date.toLocaleString("en-US", { month: "short" });
      const year = date.getUTCFullYear();

      // Construct the formatted date string
      response.data.uploadedDate = `${day} ${month} ${year}`;
      setUserBill(response.data);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchUserBill();
  }, []);

  return (
    <Box>
      {userBill ? (
        <Box sx={{ padding: "30px 30px" }}>
          <Paper className={classes.cover}>
            <Box sx={{ textAlign: "center" }}>
              <CheckCircleIcon className={classes.icon}></CheckCircleIcon>
              <Typography variant="h4" sx={{ color: " #FFB53B" }}>
                Waiting for approval
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Typography sx={{ padding: "16px 0px" }}>
                  Transaction ID
                </Typography>
                <Typography>Bill name</Typography>
                <Typography sx={{ padding: "16px 0px" }}>Owner Name</Typography>
                <Typography>Paying date</Typography>
              </Box>
              <Box sx={{ textAlign: "right" }}>
                <Typography sx={{ padding: "16px 0px" }}>
                  {userBill.id}
                </Typography>
                <Typography>{userBill.billName}</Typography>
                <Typography sx={{ padding: "16px 0px" }}>
                  {userBill.billOwnerName}
                </Typography>
                <Typography>{userBill.uploadedDate}</Typography>
              </Box>
            </Box>
            <Box
              sx={{ borderBottom: 1, color: "#DEDEDE", padding: "12px 0px" }}
            />
            <Box className={classes.amount}>
              <Typography variant="h4" sx={{ paddingTop: "16px" }}>
                Amount
              </Typography>
              <Box sx={{ textAlign: "right" }}>
                <Typography variant="h4" sx={{ paddingTop: "16px" }}>
                  {userBill.shareTotal.toFixed(2)} ฿
                </Typography>
              </Box>
            </Box>
          </Paper>
          <Button className={classes.goHomeButton} href="/home">
            <Typography>Go to Home Page</Typography>
          </Button>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
}

export default PaymentSuccessful;
