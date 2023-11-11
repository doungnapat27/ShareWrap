import { makeStyles } from "@mui/styles";

function addImportant(styles) {
  return Object.fromEntries(
    Object.entries(styles).map(([key, value]) => [key, `${value} !important`])
  );
}

const useStyles = makeStyles({
  positionProptPayButton: ({ isPromptPay }) =>
    addImportant({
      backgroundColor: isPromptPay ? "#FFB53B" : "rgba(131, 131, 131, 0.50)",
      minWidth: "165px",
      color: "black",
      "&:hover": {
        backgroundColor: isPromptPay ? "#FFB53B" : "rgba(131, 131, 131, 0.50)",
      },
    }),
});

export default useStyles;
