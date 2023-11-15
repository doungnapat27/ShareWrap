import { makeStyles } from "@mui/styles";
function addImportant(styles) {
    return Object.fromEntries(
      Object.entries(styles).map(([key, value]) => [key, `${value} !important`])
    );
}

const useStyles = makeStyles({
    cover:{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: "8px 24px",
    },
    foodContainer:{
        width: '100%',
        display: 'flex',        
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        // '&:hover': {
        //     backgroundColor: 'rgba(255, 181, 59, 0.3)', 
        //   },
        borderRadius: '10px',
        flexDirection: 'column',
    },
    foodInfo:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '16px',
        padding: '20px 30px 10px 30px',
    },
    friendInfo:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 30px 20px 30px',
    },
    avatarBox:{
        display: "flex",
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: '4px'
    },
    positionButton: addImportant({
        backgroundColor: "#FFB53B",
        color: "#000",
        marginBottom: "20px",
    }),
    boxContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        '@media (min-width: 601px) and (max-width: 1024px)': {
          width: '70%',
        },
        '@media (min-width: 1025px)': {
          width: '60%',
        },
    },
    listuser:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%'
    }
});

export default useStyles;