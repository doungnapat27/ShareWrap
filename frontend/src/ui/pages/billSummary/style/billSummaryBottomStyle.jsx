import { makeStyles } from "@mui/styles";
function addImportant(styles) {
  return Object.fromEntries(
    Object.entries(styles).map(([key, value]) => [key, `${value} !important`])
  );
}

const useStyles = makeStyles({
  cover: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: "16px 24px",
    borderRadius: "10px",
  },
  boxContainer: {
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
  boxHeader: {
    display: "flex",
    justifyContent: "space-between",
  },
  boxFriend: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    display: "flex",
    justifyContent: "flex-start",
    padding: "16px 0px 16px 0px",
    textAlign: "start",
    borderRadius: "10px",
    alignItems: "center",
    marginTop: "10px",
    height: "76px",
  },
  positionButton: addImportant({
    backgroundColor: "#FFB53B",
    marginTop: "10px",
    color: "#000",
  }),
  avatarBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: "4px",
  },
});

export default useStyles;
