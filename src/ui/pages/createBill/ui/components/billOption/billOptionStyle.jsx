import { makeStyles } from '@mui/styles';
function addImportant(styles) {
  return Object.fromEntries(
    Object.entries(styles).map(([key, value]) => [key, `${value} !important`])
  );
}

const useStyles = makeStyles({
  
  cardContainer: addImportant({
    display: "flex",
    borderRadius: "10px",
    paddingRight: "12px",
    justifyContent: "space-between",
    marginBottom: '20px',
    width: '100%',
    backgroundColor: "#FFB53B",
   }),
   boxContent: {
    display: "flex",
    padding: "16px 12px",
    backgroundColor: "#FFB53B",
    borderTopRightRadius: "20px",
    borderBottomRightRadius: "20px",
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
    // maxWidth: '252px',
   },
   imgBox: {
    marginLeft: "20px",
    display: "flex",
    height: "30px",
    alignSelf: "center",
   },
   nextButton: addImportant({
    backgroundColor: "#fc9b00",
    marginLeft: "12px",
    paddingTop: "16px",
    paddingBottom: "16px",
    alignSelf: "center",
    color: '#000'
   }),
})

export default useStyles