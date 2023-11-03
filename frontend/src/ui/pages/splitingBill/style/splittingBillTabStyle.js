import { makeStyles } from "@mui/styles";

function addImportant(styles) {
  return Object.fromEntries(
    Object.entries(styles).map(([key, value]) => [key, `${value} !important`])
  );
}

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  tabContainer: {
    borderBottom: 1,
    borderColor: "divider",
    backgroundColor: "#ffff",
    padding: "0 30px",
  },
  paperContainer: addImportant({
    borderRadius: "10px",
    padding: "24px 20px 40px",
    backgroundColor: "rgba(255, 255, 255, 0.70)",
  }),
});

export default useStyles
