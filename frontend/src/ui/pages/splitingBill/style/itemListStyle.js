import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  paperContainer: {
    borderRadius: "10px",
    backgroundColor: "rgba(255, 255, 255, 0.70)",
    display: "flex",
    padding: "8px 32px 17px",
    justifyContent: "space-evenly",
    marginTop: "20px",
    position: "relative",
  },
  positionButton: {
    position: "absolute !important",
    right: -18,
    top: -16,
  },
  positoinTypo: {
    marginRight: "16px !important"
  },
  setWidthTextField: {
    width: '120px'
  }

})

export default useStyles