import { makeStyles } from "@mui/styles";
import useStyles from "../../pendingBill/style/pendingBillTabStyle";

function addImportant(styles) {
  return Object.fromEntries(
    Object.entries(styles).map(([key, value]) => [key, `${value} !important`])
  );
}

const styles = makeStyles({
  cover: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
  },
  tabContainer: {
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
  },
  centerTab: addImportant({
    flex: 1,
    width: "50%",
    color: "black",
  }),
  menuContainer: {
    width: "100%",
    "@media (min-width: 601px) and (max-width: 1024px)": {
      width: "70%",
    },
    "@media (min-width: 1025px)": {
      width: "60%",
    },
  },
  topicContainer: addImportant({
    width: "100%",
    height: "90px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(255, 181, 59, 0.5)",
    padding: "0 30px 0 30px",
    borderBottomLeftRadius: "15px",
    borderBottomRightRadius: "15px",
    marginBottom: "4px",
  }),
});

export default useStyles;
