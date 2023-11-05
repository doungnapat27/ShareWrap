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
        justifyContent:'space-between'
    },
})

export default useStyles