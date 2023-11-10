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
    tabContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'stretch',
        borderColor: "divider",
        borderBottomLeftRadius: "15px",
        borderBottomRightRadius: "15px",
        backgroundColor: "#ffffff",
        '& .MuiTabs-flexContainer':{
            display: 'flex',
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            alignItems: 'center',
        },
        width: '100%',
    },
    centerTab: addImportant({
        flex: 1,
        width: '50%',
        color: 'black',
    }),
    paperSearchBox:{
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '80%',
        marginTop:'10px',
        borderRadius: '10px !important',
    },
    searchBoxContainer:{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'center',
        marginBottom: '4px',
        position: 'relative',
    },
    bottomBar:{
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000,
    },
    selectFriend:{
        marginTop: '20px',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'left',
        paddingLeft:'30px',
        width: '100%',
        '@media (min-width: 601px) and (max-width: 1024px)': {
        width: '70%',
        },
        '@media (min-width: 1025px)': {
        width: '60%',
        },
    },
    friendList:{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        justifyContent:'center',
        alignItems: 'center',
    },
    searchResults:addImportant({
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        borderRadius: '10px',
        position: 'absolute',
        top: '22%',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        maxHeight: '200px',
        overflowY: 'auto',
        overflowX: 'hidden',
        zIndex: 1000, 
    }),

    
    searchQuery:{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        '@media (min-width: 601px) and (max-width: 1024px)': {
          width: '70%',
        },
        '@media (min-width: 1025px)': {
          width: '60%',
        },
    },
    addButton:addImportant({
        outline: '1px solid',
        color: '#981E25',
        width: '10%',
        height: '30px',
        marginRight: '30px'
    })
    
});

export default useStyles;