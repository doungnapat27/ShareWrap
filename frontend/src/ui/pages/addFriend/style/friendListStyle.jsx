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
        alignItems: 'stretch',
    },
    nameContainer:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    friendContainer:{
        display: 'flex',
        justifyContent:'space-around',
        
        margin: '8px 0px 8px 0px',
        // marginTop: '20px',
        // display: 'flex',
        // alignItems: 'center',
        // padding:'0px 30px 0px 30px',
        // justifyContent:'space-around',
        width: '100%',
        '@media (min-width: 601px) ': {
            padding: '0px 30px 0px 30px',
        },
    },
    checkBox:{
        // marginTop: '20px',
        // display: 'flex',
        // alignItems: 'center',
        // textAlign: 'left',
        // padding:'0px 30px 0px 30px',
        // width: '100%',
    },
})

export default useStyles