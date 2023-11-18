import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  cardContainer: {
    display: "flex",
    borderRadius: "10px !important",
    paddingRight: "12px",
    justifyContent: "space-between",
    marginBottom: '20px',
   },
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
   nextButton: {
    backgroundColor: "#FFB53B !important",
    marginLeft: "12px !important",
    paddingTop: "16px !important",
    paddingBottom: "16px !important",
    alignSelf: "center !important",
    color: '#000 !important'
   }
})

export default useStyles