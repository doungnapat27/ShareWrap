import { makeStyles } from '@mui/styles';
function addImportant(styles) {
    return Object.fromEntries(
      Object.entries(styles).map(([key, value]) => [key, `${value} !important`])
    );
  }
const useStyles = makeStyles({

  appBarStyle: {
    backgroundColor: "#fff !important",
    paddingTop: '8px',
    '& .MuiToolbar-root' :{
        '@media (min-width: 601px) and (max-width: 1024px)': { 
            paddingLeft: '15%',
            paddingRight: '15%',
        },
        '@media (min-width: 1025px)': { 
            paddingLeft: '15%',
            paddingRight: '15%',
        },
    },

  },
  title: addImportant({
    flexGrow: 1,
    color: "#000",
    textShadow: "2px 4px 7px rgba(0, 0, 0, 0.25)",
    fontWeight: 400,
    fontSize: "16px",
    letterSpacing: "-0.56px",
    fontFamily: "Arial Rounded MT",
  }),
  notificationIcon: addImportant({
    color: "#000",
    fontSize: 35,
  }),
  accountCircle: addImportant({
    fontSize: 35,
  }),

});


export default useStyles