import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  cover: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    overflowY: "auto",
    maxHeight: "calc(100vh - 235px - 196px)",
  },
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "center",
  },
  nameContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  friendContainer: {
    display: "flex",
    justifyContent: "space-between",
    margin: "8px 0px 8px 0px",
    width: "100%",
    padding: "0px 30px 0px 30px",
    "@media (min-width: 601px) and (max-width: 1024px)": {
      width: "70%",
    },
    "@media (min-width: 1025px)": {
      width: "60%",
    },
  },
});

export default useStyles;
