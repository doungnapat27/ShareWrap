import { withStyles } from "@mui/styles";
function addImportant(styles) {
  return Object.fromEntries(
    Object.entries(styles).map(([key, value]) => [key, `${value} !important`])
  );
}

const styles = {
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: 300,
  },
  loginLogo: {
    marginTop: "160px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputTextField: {
    "& .MuiInputBase-root": {
      borderRadius: "10px",
      backgroundColor: "rgba(255, 255, 255, 0.5)",
    },
    width: "100%",
    marginBottom: "40px",
    marginTop: "16px",
    borderRadius: "10px",
  },
  loginButton: addImportant({
    width: "190px",
    height: "41px",
    backgroundColor: "#981E25",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
    fontWeight: "bold",
    borderRadius: "10px",
  }),
  TextBoxInput: addImportant({
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: "10px",
  }),
  BoxaccountText: {
    marginTop: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  Buttontosignup: addImportant({
    textTransform: "none",
    color: "#981E25",
    textDecoration: "underline",
    fontWeight: "bold",
    "&:hover": {
      textDecoration: "underline",
      backgroundColor: "transparent",
    },
  }),
};

export default withStyles(styles);
