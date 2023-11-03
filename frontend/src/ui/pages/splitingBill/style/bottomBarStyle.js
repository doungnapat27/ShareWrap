import { makeStyles } from "@mui/styles";

function addImportant(styles) {
  return Object.fromEntries(
    Object.entries(styles).map(([key, value]) => [key, `${value} !important`])
  );
}

const useStyles = makeStyles({
  boxContainer: {
    backgroundColor: "#fff",
    padding: "24px 30px",
    borderRadius: "10px",
  },
  boxHeader: {
    display: "flex",
    justifyContent: "space-between"
  },
  boxAccount: {
    backgroundColor: "rgba(255, 181, 59, 0.50)",
    display: "flex",
    justifyContent: "space-between",
    padding: "16px 20px",
    textAlign: "start",
    borderRadius: "10px",
    alignItems: "center",
    marginTop: "10px",
  },
  positionBotton: addImportant({
    backgroundColor: "#FFB53B",
    marginTop: "10px",
    color: "#000",
  })
})

export default useStyles