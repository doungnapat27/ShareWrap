import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Typography, Box, Link } from "@mui/material";
import useStyles from "../style/hometabStyle";
import CreateBill from "./createBillButton";
import Bill from "./bill";
import PendingBills from "./pendingBills";
import TabPanel from "../../../../common/tabPanel";
import { request } from "../../../../helpers/axios_helper";
import CircularProgress from "@mui/material/CircularProgress";

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function HomeTab() {
  const [value, setValue] = useState(0);
  const classes = useStyles();
  const uid = JSON.parse(localStorage.getItem("auth_user")).id;
  const [userBills, setUserBills] = useState([]);
  const [bills, setBills] = useState([]);
  const [showTopShadow, setShowTopShadow] = useState(false);
  const [showBottomShadow, setShowBottomShadow] = useState(false);
  const billContainerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleScroll = () => {
    const container = billContainerRef.current;
    if (!container) return;

    const showTop = container.scrollTop > 10;
    const showBottom =
      container.scrollHeight - container.scrollTop >
      container.clientHeight + 10;

    setShowTopShadow(showTop);
    setShowBottomShadow(showBottom);
  };

  const fetchUserBills = async () => {
    setIsLoading(true);
    try {
      const response = await request("GET", "/" + uid + "/userBills");
      const formattedBills = response.data.map((bill) => {
        // Assuming the date in millis is stored in a field like billDate
        const date = new Date(bill.billCreatedDate);

        // Formatting the date
        const day = date.getUTCDate();
        const month = date.toLocaleString("en-US", { month: "short" });
        const year = date.getUTCFullYear();

        // Construct the formatted date string
        bill.billCreatedDate = `${day} ${month} ${year}`;
        setIsLoading(false);
        return bill;
      });
      setIsLoading(false);
      setUserBills(formattedBills);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const fetchBills = async () => {
    setIsLoading(true);
    try {
      const response = await request("GET", "/" + uid + "/bills");
      const formattedBills = response.data.map((bill) => {
        // Assuming the date in millis is stored in a field like billDate
        const date = new Date(bill.createdDate);

        // Formatting the date
        const day = date.getUTCDate();
        const month = date.toLocaleString("en-US", { month: "short" });
        const year = date.getUTCFullYear();

        // Construct the formatted date string
        bill.createdDate = `${day} ${month} ${year}`;
        setIsLoading(false);
        return bill;
      });
      setIsLoading(false);
      setBills(formattedBills);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserBills();
    fetchBills();

    const container = billContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll(); // initial check
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box className={classes.cover}>
      <Box className={classes.container}>
        <Box className={classes.tabContainer}>
          <Tabs
            value={value}
            onChange={handleChange}
            className={classes.tabsStyle}
            sx={{ padding: "0 30px" }}
            TabIndicatorProps={{
              sx: {
                background: "#FFB53B",
              },
            }}
            centered={true}
          >
            <Tab
              label="Homepage"
              className={classes.centerTab}
              {...a11yProps(0)}
            />
          </Tabs>
        </Box>
        <Box className={classes.cover}>
          <Box className={classes.containerInfo}>
            <TabPanel value={value} index={0}>
              <Box>
                <CreateBill/>
                <Typography variant="h4">History bills</Typography>
                {isLoading ? (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      marginTop: "24px",
                    }}
                  >
                    <CircularProgress size={48} style={{ color: "#FFB53B" }} />
                  </Box>
                ) : (
                  <Box>
                    {userBills.length > 0 || bills.length > 0 ? (
                      <Box
                        mt={2}
                        className={`${classes.billContainer} ${
                          showTopShadow ? "showTopShadow" : ""
                        } ${showBottomShadow ? "showBottomShadow" : ""}`}
                        ref={billContainerRef}
                      >
                        <Box>
                          <Bill bills={bills} />
                          <PendingBills userBills={userBills} />
                        </Box>
                      </Box>
                    ) : (
                      <Box sx={{ textAlign: "center", marginTop: "22px" }}>
                        <Box>
                          <Typography
                            variant="h5"
                            sx={{ color: "#838383", marginBottom: "11px" }}
                          >
                            No bill.
                          </Typography>
                        </Box>
                        <Link
                          href="/splitting-bill"
                          variant="h4"
                          sx={{ color: "#981E25" }}
                        >
                          Create bill
                        </Link>
                      </Box>
                    )}
                  </Box>
                )}
              </Box>
            </TabPanel>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default HomeTab;
