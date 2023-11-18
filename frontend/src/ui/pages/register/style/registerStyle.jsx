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
  },
  boxform: {
    width: "100%",
    maxWidth: 300,
  },
  TextBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    marginBottom: "16px",
    marginTop: "80px",
  },
  inputTextField: {
    "& .MuiInputBase-root": {
      borderRadius: "10px",
      backgroundColor: "rgba(255, 255, 255, 0.5)",
    },
    width: "100%",
    marginBottom: "16px",
    marginTop: "16px",
    borderRadius: "10px",
  },
  TextBoxInput: addImportant({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    marginBottom: "40px",
    marginTop: "40px",
  }),
  registerButton: addImportant({
    width: "190px",
    height: "48px",
    backgroundColor: "#981E25",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
    fontWeight: "bold",
    borderRadius: "10px",
  }),
  signinButton: addImportant({
    textTransform: "none",
    color: "#981E25",
    textDecoration: "underline",
    fontWeight: "bold",
    textDecoration: "underline",
    backgroundColor: "transparent",
  }),
  AccountBox: addImportant({
    marginTop: "56px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }),
};

export default withStyles(styles);
