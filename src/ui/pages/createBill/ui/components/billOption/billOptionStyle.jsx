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
    borderRadius: "10px",
    width: '100%',
    flexDirection: "row",
   },
   nameContent: {
    // flexBasis: '70%',
    // maxWidth: '70%',
    display: "flex",
    flexDirection: 'column',
   },
   imgBox: {
    // marginLeft: "40px",
    // height: "30px",
    alignSelf: "center",
    // flexBasis: '20%',
    // maxWidth: '20%',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    '@media (min-width: 601px) and (max-width: 1024px)': { 
      
    },
    '@media (min-width: 1025px)': { 
      
    },
   },
   nextButton: addImportant({
    // flexBasis: '20%',
    // maxWidth: '20%',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFCE82",
    marginLeft: "10px",
    paddingTop: "16px",
    paddingBottom: "16px",
    alignSelf: "center",
    color: '#000',
   }),
   img1: { 
    zIndex: 1, 
  },

  img2: {
    position: 'absolute',
    top: '8px', 
    left: '20px',  
    zIndex: 0, 
  },
})

export default useStyles