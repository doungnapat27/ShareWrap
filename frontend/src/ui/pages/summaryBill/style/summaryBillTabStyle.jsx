import { makeStyles } from "@mui/styles";
function addImportant(styles) {
    return Object.fromEntries(
      Object.entries(styles).map(([key, value]) => [key, `${value} !important`])
    );
}

const useStyle = makeStyles({
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
    menuContainer: {
        width: '100%',
        '@media (min-width: 601px) and (max-width: 1024px)': {
            width: '70%',
        },
        '@media (min-width: 1025px)': {
            width: '60%',
        },
        
    },
    topicContainer:addImportant({
        width: '100%',
        height: '90px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 181, 59, 0.5)',
        padding: '0 30px 0 30px',
        borderBottomLeftRadius: "15px",
        borderBottomRightRadius: "15px",
    }),
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
    bottomBar:{
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000,
    },
    equalContainer:{
        marginTop: '14px',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'left',
        padding:'0 30px 0 30px',
        width: '100%',
        justifyContent: 'space-between',
    },
    foodContainer:{
        width: '100%',
        display: 'flex',
        marginTop: '14px',
        padding: '16px 30px 0 30px',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        borderRadius: '10px',
    },
    foodInfo:{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
    },
    splittingBillContainer:{
        overflowY: 'auto',
        maxHeight: 'calc(100vh - 120px - 270px)',
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
});

export default useStyle;