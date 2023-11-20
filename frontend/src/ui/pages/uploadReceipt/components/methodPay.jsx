import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  CircularProgress,
} from "@mui/material";
import logoKasikorn from "../../../assets/kasikorn.png";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import GeneratePromptPayQR from "../../../modules/components/QRCode";
import UploadImage from "./uploadImage";
import { request } from "../../../../helpers/axios_helper";

import useStyles from "../style/uploadReceiptStyle";

function MethodPay() {
  const classes = useStyles();
  const [userBill, setUserBill] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const uid = JSON.parse(localStorage.getItem("auth_user")).id;

  const fetchUserBill = async () => {
    setIsLoading(true);
    try {
      const response = await request(
        "GET",
        "/" + uid + "/userBills/" + window.location.pathname.split("/")[3]
      );
      setUserBill(response.data);
    } catch (error) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const renderPaymentMethod = () => {
    if (userBill && userBill.paymentType === "B") {
      return (
        <Box>
          <Typography sx={{ marginBottom: "11px" }}>
            1. Copy the account number
          </Typography>
          <Paper className={classes.cover}>
            <Box sx={{ display: "flex" }}>
              <Box>
                <img src={logoKasikorn} width="50px" height="50px" />
              </Box>
              <Box ml={1} sx={{ alignSelf: "center" }}>
                <Typography variant="h4">{userBill.billOwnerName}</Typography>
                <Typography variant="h5">
                  {userBill.bankAccountDto.bankName},{" "}
                  {userBill.bankAccountDto.accountNumber}
                </Typography>
              </Box>
            </Box>
            <Box>
              <ContentCopyIcon />
            </Box>
          </Paper>
        </Box>
      );
    } else if (userBill && userBill.paymentType === "P") {
      return isLoading ? (
        <CircularProgress size={45} style={{ color: "#FFB53B" }} />
      ) : (
        <Box>
          <Paper
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.70)",
              padding: "20px 30px",
              textAlign: "center",
              margin: "15px 0px",
            }}
          >
            <GeneratePromptPayQR
              phoneNumber={userBill.promptpayDto.phoneNumber}
              amount={userBill.shareTotal}
            />
            <Typography variant="h4" sx={{ marginTop: "15px" }}>
              ฿ {userBill.shareTotal.toFixed(2)}
            </Typography>
            <Typography>{userBill.billOwnerName}</Typography>
            <Typography>{userBill.promptpayDto.phoneNumber}</Typography>
            <Button
              startIcon={<SaveAltIcon />}
              sx={{
                paddingTop: "12px",
                paddingBottom: "12px",
                paddingLeft: "16px",
                border: "3px solid var(--status-pending, #FFB53B)",
                color: "#FFB53B",
                borderRadius: "10px",
                margin: "15px 0px",
                backgroundColor: "#FFF",
              }}
            >
              <Typography>Save QR Code</Typography>
            </Button>
          </Paper>
        </Box>
      );
    } else {
      return <div>Render content for other paymentTypes</div>;
    }
  };

  useEffect(() => {
    fetchUserBill();
  }, []);

  return (
    <Box p={4} className={classes.cover}>
      <Box className={classes.container}>
        <Box className={classes.receiptContainer}>
          <Typography sx={{ marginBottom: "11px" }}>
            1. Save QR Code
            </Typography>
          {renderPaymentMethod()}
          <Typography sx={{ marginBottom: "42px" }}>
            2. Go to transfer via your mobile banking
          </Typography>
          <Typography sx={{ marginBottom: "11px" }}>
            3. Upload your receipt
          </Typography>
          <UploadImage />
        </Box>
      </Box>
    </Box>
  );
}

export default MethodPay;
