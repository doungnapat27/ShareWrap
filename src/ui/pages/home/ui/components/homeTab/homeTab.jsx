import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  conainer: {
    wisth: '100%'
  },
  tabContainer: {
    borderBottom: 1,
    borderColor: "divider",
    borderBottomLeftRadius: "15px",
    borderBottomRightRadius: "15px",
    backgroundColor: "#fff",
  },
  centerTab: {
    flex: 1,
    width: '50%',
  },
  typoStyle: {
    fontFamily: "Inter",
    fontWeight: "700",
    fontSize: "20px",
  }
})

export default useStyles