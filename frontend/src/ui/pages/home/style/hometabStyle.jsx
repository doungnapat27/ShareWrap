import { makeStyles } from "@mui/styles";

function addImportant(styles) {
  return Object.fromEntries(
    Object.entries(styles).map(([key, value]) => [key, `${value} !important`])
  );
}
const useStyles = makeStyles({
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
    overflow: "hidden",
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
    overflow: "hidden",
    width: "100%",
  },

  containerInfo: {
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
  },
  centerTab: addImportant({
    flex: 1,
    width: "50%",
    color: "black",
  }),
  billContainer: {
    overflowY: "auto",
    maxHeight: "calc(100vh - 354px)",
    position: "relative",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: "10px",
      background: "linear-gradient(to bottom, rgba(0,0,0,0.2), transparent)",
      display: "none", // Hide by default
    },
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: "10px",
      background: "linear-gradient(to top, rgba(0,0,0,0.2), transparent)",
      display: "none", // Hide by default
    },
    "&.showTopShadow::before": {
      display: "block",
    },
    "&.showBottomShadow::after": {
      display: "block",
    },
  },
});

export default useStyles;
