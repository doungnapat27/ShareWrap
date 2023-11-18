import React, { useState } from "react";
import useStyles from "../style/billDetailsTabStyle";
import {
  Box,
  Tabs,
  Tab,
  Paper,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
} from "@mui/material";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function BillDetailTab(params) {
  const [value, setValue] = useState(0);
  const [openDialogConfirm, setOpenDialogConfirm] = useState(false);
  const [openDialogIgnore, setOpenDialogIgnore] = useState(false);
  const classes = useStyles();

  const handleOpenDialogConfirm = () => {
    setOpenDialogConfirm(true);
  };

  const handleCloseDialogConfirm = () => {
    setOpenDialogConfirm(false);
  };

  const handleOpenDialogIgnore = () => {
    setOpenDialogIgnore(true);
  };

  const handleCloseDialogIgnore = () => {
    setOpenDialogIgnore(false);
  };

  return (
    <Box className={classes.cover}>
      <Box className={classes.container}>
        <Box className={classes.tabContainer}>
          <Tabs
            value={value}
            TabIndicatorProps={{
              sx: { background: "#FFB53B" },
            }}
            centered={true}
          >
            <Tab
              className={classes.centerTab}
              label="Bill Details"
              {...a11yProps(0)}
            />
          </Tabs>
        </Box>
        <Box className={classes.cover}>
          <Box className={classes.menuContainer}>
            <Paper className={classes.topicContainer}>
              <Typography variant="h5">
                Bill Name
                <Typography variant="h4">฿ 100000</Typography>
              </Typography>
              <Box className={classes.userDetailContainer}>
                <Typography variant="h6">Paid by ...Friend Name1</Typography>
                <Typography variant="h6">On DD/MM/YY/ HH:MM</Typography>
              </Box>
            </Paper>
          </Box>
          <Box className={classes.cover}>
            <Box
              sx={{
                width: "250px",
                marginTop: "20px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Paper
                sx={{
                  height: "330px",
                  display: "flex",
                }}
              >
                Uploaded bill Photo
              </Paper>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  marginTop: "20px",
                }}
              >
                <Button
                  sx={{
                    color: "black",
                    backgroundColor: "rgba(144, 255, 156, 1)",
                    borderRadius: "20px",
                    margin: "4px 0 4px 0",
                  }}
                  onClick={handleOpenDialogConfirm}
                >
                  Confirm this bill
                </Button>
                <Button
                  sx={{
                    color: "black",
                    backgroundColor: "rgba(227, 34, 49, 0.8)",
                    borderRadius: "20px",
                    margin: "4px 0 4px 0",
                  }}
                  onClick={handleOpenDialogIgnore}
                >
                  Ignore this bill
                </Button>
                <Dialog
                  open={openDialogConfirm}
                  onClose={handleCloseDialogConfirm}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle
                    id="alert-dialog-title"
                    className={classes.dialogTitle}
                  >
                    <Typography variant="h5">
                      Are you sure to confirm this bill?
                    </Typography>
                  </DialogTitle>
                  <DialogActions
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Button
                      variant="contained"
                      onClick={handleCloseDialogConfirm}
                      sx={{
                        width: "100%",
                        backgroundColor: "green",
                        color: "white",
                        marginBottom: "16px",
                      }}
                    >
                      <Typography variant="h5">
                        Yes, confirm this bill
                      </Typography>
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={handleCloseDialogConfirm}
                      sx={{
                        width: "100%",
                        color: "Black",
                        marginBottom: "16px",
                        outlineColor: "Black",
                      }}
                    >
                      <Typography variant="h5">No</Typography>
                    </Button>
                  </DialogActions>
                </Dialog>

                <Dialog
                  open={openDialogIgnore}
                  onClose={handleCloseDialogIgnore}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle
                    id="alert-dialog-title"
                    className={classes.dialogTitle}
                  >
                    <Typography variant="h5">
                      Are you sure to ignore this bill?
                    </Typography>
                  </DialogTitle>
                  <DialogActions
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Button
                      variant="contained"
                      onClick={handleCloseDialogIgnore}
                      sx={{
                        width: "100%",
                        backgroundColor: "red",
                        color: "white",
                        marginBottom: "16px",
                      }}
                    >
                      <Typography variant="h5">
                        Yes, ignore this bill
                      </Typography>
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={handleCloseDialogIgnore}
                      sx={{
                        width: "100%",
                        color: "Black",
                        marginBottom: "16px",
                        outlineColor: "Black",
                      }}
                    >
                      <Typography variant="h5">No</Typography>
                    </Button>
                  </DialogActions>
                </Dialog>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default BillDetailTab;
