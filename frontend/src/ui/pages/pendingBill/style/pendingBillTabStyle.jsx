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
    alignItems: "stretch",
  },
  tabContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "stretch",
    borderColor: "divider",
    borderBottomLeftRadius: "15px",
    borderBottomRightRadius: "15px",
    backgroundColor: "#ffffff",
    "& .MuiTabs-flexContainer": {
      display: "flex",
      justifyContent: "space-evenly",
      flexDirection: "row",
      alignItems: "center",
    },
    width: "100%",
  },
  centerTab: addImportant({
    flex: 1,
    width: "50%",
    color: "black",
  }),
  menuContainer: {
    width: "100%",
    "@media (min-width: 601px) and (max-width: 1024px)": {
      width: "70%",
    },
    "@media (min-width: 1025px)": {
      width: "60%",
    },
  },
  topicContainer: addImportant({
    width: "100%",
    height: "90px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(255, 181, 59, 0.5)",
    padding: "0 30px 0 30px",
    borderBottomLeftRadius: "15px",
    borderBottomRightRadius: "15px",
    marginBottom: "4px",
  }),
  statusContainer:{
    backgroundColor: "rgba(2, 198, 22, 0.7)",
    padding: "10px",
    borderRadius: "10px",
  },
  statusContainerNotRecieved:{
    backgroundColor: "rgba(227, 34, 49, 0.60)",
    padding: "10px",
    borderRadius: "10px",
  },
  billContainer:{
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    overflowY: "auto",
    maxHeight: "calc(100vh - 210px)",
  },
  accountDetail:{
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: "20px"
  },
  boxAccount: {
    width: "80%",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    display: "flex",
    justifyContent: "space-between",
    padding: "16px 20px",
    textAlign: "start",
    borderRadius: "10px",
    alignItems: "center",
    marginTop: "10px",
  },
  paidContainer:{
    marginTop: '20px',
    display: 'flex',
    flexDirection: "column",
    alignItems: 'flex-start',
    textAlign: 'left',
    paddingLeft:'30px',
    paddingRight:'30px',
    width: '100%',
  },
  alreadyPaidContainer:addImportant({
    marginTop: '10px',
    width: '100%',
    display: 'flex',
    flexDirection: "column",
    backgroundColor: "rgba(144, 255, 156, 0.5)",
    borderRadius: '10px',
    padding: '10px',
  }),
  didNotPayContainer:addImportant({
    marginTop: '10px',
    width: '100%',
    display: 'flex',
    flexDirection: "column",
    backgroundColor: "rgba(227, 34, 49, 0.3)",
    borderRadius: '10px',
    padding: '10px',
  }),
  paid:{
    width: '100%',
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: '2px 0 2px 0',
    padding: '0 4px 0 4px ',
  },
  name:{
    width: '100%',
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    width: '100%',
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    alignContent: "center",
  },
  statusBill:{
    width: '100%',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  cancelButton:addImportant({
    backgroundColor: 'red'
  }),
  buttonContainer:{
    margin: '20px 0 20px 0',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  dialogTitle:{
    marginTop: "10px",
    display: 'flex',
    alignItems: 'center',
  },
  dialogActions:{
    marginBottom: '10px',
    display: 'flex',
    flexDirection: 'column',
  },
  noButton:addImportant({
    height: '40px',
    color: 'black',
    marginBottom: '10px',
    borderRadius: '20px',
  }),
  yesButton:addImportant({
    color: 'white',
    backgroundColor: 'red',
    borderRadius: '20px',
    height: '40px',
    width: "100%",
  })
});

export default useStyles;
