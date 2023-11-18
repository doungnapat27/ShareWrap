import { makeStyles } from "@mui/styles";

function addImportant(styles) {
  return Object.fromEntries(
    Object.entries(styles).map(([key, value]) => [key, `${value} !important`])
  );
}
const useStyles = makeStyles({
  cover: addImportant({
    padding: "30px ",
    borderRadius: "30px",
  }),
  icon: addImportant({
    fontSize: "60px",
    color: "#FFB53B",
  }),
  amount: addImportant({
    display: "flex",
    justifyContent: "space-between",
  }),
  goHomeButton: addImportant({
    width: "100%",
    backgroundColor: "#FFB53B",
    color: "black",
    borderRadius: "10px",
    paddingTop: "15px",
    paddingBottom: "15px",
    marginTop: "20px",
    boxShadow: "1",
  }),
});

export default useStyles;
