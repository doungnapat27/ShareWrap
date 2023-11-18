import { makeStyles } from "@mui/styles";

function addImportant(styles) {
  return Object.fromEntries(
    Object.entries(styles).map(([key, value]) => [key, `${value} !important`])
  );
}
const useStyles = makeStyles({
  cover: addImportant({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px 16px",
    marginBottom: "39px",
    borderRadius: "10px",
  }),
  uploadReceiptButton: addImportant({
    width: "100%",
    backgroundColor: "#FFB53B",
    color: "black",
    borderRadius: "10px",
    paddingTop: "15px",
    paddingBottom: "15px",
    boxShadow: "1",
  }),
  cover: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    overflowY: "auto",
    maxHeight: "calc(100vh - 70px)",
  },
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "Center",
  },
  receiptContainer: {
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
});

export default useStyles;
