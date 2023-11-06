import { makeStyles } from "@mui/styles";

function addImportant(styles) {
  return Object.fromEntries(
    Object.entries(styles).map(([key, value]) => [key, `${value} !important`])
  );
}

const useStyles = makeStyles({
  positionBankAccButton: ({ isBankAcc }) =>
  addImportant({
    minWidth: "170px",
    color: "black",
    backgroundColor: isBankAcc ? "#FFB53B" : "rgba(131, 131, 131, 0.50)",
    "&:hover": {
      backgroundColor: isBankAcc ? "#FFB53B" : "rgba(131, 131, 131, 0.50)",
    },
  }),
})

export default useStyles