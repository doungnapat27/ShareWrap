import { makeStyles } from "@mui/styles";

function addImportant(styles) {
  return Object.fromEntries(
    Object.entries(styles).map(([key, value]) => [key, `${value} !important`])
  );
}

const useStyles = makeStyles({
  styleButton: addImportant({
    backgroundColor: "rgba(255, 255, 255, 0.70)",
    padding: "15px 20px",
    marginTop: "20px",
    borderRadius: "10px",
    '&: hover': {
      backgroundColor: "rgba(255, 255, 255, 0.70)",
    }
  }),
  styleAddCIrcleIcon: {
    color: "#000",
    marginRight: "8px"
  }
})

export default useStyles