import { makeStyles } from "@mui/styles";

function addImportant(styles) {
  return Object.fromEntries(
    Object.entries(styles).map(([key, value]) => [key, `${value} !important`])
  );
}
const useStyles = makeStyles({
  cover: addImportant({
    padding: "12px 20px",
    backgroundColor: "rgba(255, 181, 59, 0.50)",
    borderRadius: "10px",
    marginBottom: "20px",
  }),
  pendingText: addImportant({
    backgroundColor: "white",
    padding: "5px 17px",
    borderRadius: "5px",
  }),

  smallTextFrist: addImportant({
    fontSize: "12px",
    color: "#838383",
    paddingTop: "10px",
  }),
  smallTextSecond: addImportant({
    fontSize: "12px",
    color: "#838383",
    marginBottom: "10px",
  }),
  payButton: addImportant({
    width: "100%",
    backgroundColor: "#FFB53B",
    color: "black",
    borderRadius: "10px",
    paddingTop: "15px",
    paddingBottom: "15px",
    boxShadow: "1",
  }),
});
export default useStyles;
