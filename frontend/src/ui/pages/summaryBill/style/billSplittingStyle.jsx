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
    billContainer:{
        width: '100%',
        display: 'flex',        
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        borderRadius: '10px',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column',
        padding: '20px 30px 10px 30px',
    },
    friendContainer:{
        display: 'flex',
        alignItems: 'center',
        // padding: '20px 30px 10px 30px',
    },
    rowOne:{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    rowTwo:{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: ' 10px 0 0 50px',
    },
});
export default useStyles;