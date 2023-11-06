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
        overflowY: 'auto',
        maxHeight: 'calc(100vh - 220px - 196px)',
        '&::-webkit-scrollbar-track': {
            backgroundColor: 'transparent',
            borderRadius: '10px',
        },
        '&::-webkit-scrollbar': {
            width: '10px',
            backgroundColor: 'transparent',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#981E25',
            borderRadius: '10px',
            border: '2px solid #f0f0f0',
        },
        '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#BE2830',
        },
    },
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    nameContainer:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    friendContainer:{
        display: 'flex',
        justifyContent:'space-between',
        margin: '8px 0px 8px 0px',
        width: '100%',
        padding:'0px 30px 0px 30px',
        '@media (min-width: 601px) and (max-width: 1024px)': {
            width: '70%',
        },
        '@media (min-width: 1025px)': {
            width: '60%',
        },
    },
})

export default useStyles