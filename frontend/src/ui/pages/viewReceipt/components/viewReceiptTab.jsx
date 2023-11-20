import React, { useState, useContext} from "react";
import { Tabs, Tab, Box, Paper } from "@mui/material";
import BillStatus from "../../home/components/billStatus";
import { ShareImageContext } from "../../uploadReceipt/components/shareImageContext";

function ViewRecepitTab() {
  const [value, setValues] = useState(0);
  const { uploadImage } = useContext(ShareImageContext);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "stretch",
            borderColor: "divider",
            borderBottomLeftRadius: "15px",
            borderBottomRightRadius: "15px",
            backgroundColor: "#ffffff",
            "& .MuiTabs-flexContainer": {
              display: "flex",
              justifyContent: "space-evenly",
              flexDirection: "row",
              alignItems: "center",
            },
            width: "100%",
          }}
        >
          <Tabs
            value={value}
            TabIndicatorProps={{
              sx: { background: "#FFB53B" },
            }}
            centered={true}
          >
            <Tab
              sx={{
                flex: 1,
                width: "50%",
                color: "black !important",
              }}
              label="Friend's bill details"
            />
          </Tabs>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch",
              "@media (min-width: 601px) and (max-width: 1024px)": {
                width: "70%",
              },
              "@media (min-width: 1025px)": {
                width: "60%",
              },
              overflowY: "auto",
              maxHeight: "calc(100vh - 200px - 112px)",
            }}
          >
            <Box>
              <BillStatus />
              <Box
                sx={{
                  marginTop: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Paper sx={{ height: "400px" }}>
                  <img
                    src={uploadImage}
                    alt="bill image"
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                  />
                </Paper>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ViewRecepitTab;
