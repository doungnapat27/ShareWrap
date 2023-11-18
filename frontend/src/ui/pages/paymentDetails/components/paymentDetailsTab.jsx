import React, { useState } from 'react'
import {
  Paper,
  Tab,
  Tabs,
  Container,
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
} from '@mui/material'
import { green, amber } from '@mui/material/colors'
import useStyle from '../style/paymentsDetailsStyle'

function PaymentDetailsTab() {
  const classes = useStyle()
  const [value, setValue] = useState(0)

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    }
  }

  return (
    <Box className={classes.cover}>
      <Box className={classes.container}>
        <Box className={classes.tabContainer}>
          <Tabs
            value={value}
            TabIndicatorProps={{
              sx: { background: '#FFB53B' },
            }}
            centered={true}
          >
            <Tab
              className={classes.centerTab}
              label='Payment Details'
              {...a11yProps(0)}
            />
          </Tabs>
        </Box>
        <Box className={classes.cover}>
          <Box className={classes.menuContainer}>
            <Paper className={classes.topicContainer}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', justify }}>
              <Typography variant='h5'>My Bill</Typography>
              <Typography variant='h3'>฿ 300</Typography>
              <Box sx={{ padding: '6px', backgroundColor: 'red', display:'flex', alignItems: 'end'}}>
                {/* {!bill.isPaid && ( */}
                  <Typography variant='h5'>
                    Not Recieved
                  </Typography>
                {/* )} */}
              </Box>
              </Box>
            </Paper>
            {/* <Box className={classes.splittingBillContainer}>
                    <BillSummarySpitting />
                </Box> */}
          </Box>
        </Box>
        {/* <Box className={classes.bottomBar}>
            <BillSummaryBottom/>
        </Box> */}
      </Box>
    </Box>
    // <Container>
    //   <Box sx={{ bgcolor: amber[500], color: 'white', p: 2, my: 2 }}>
    //     <Typography variant="h6">Pending bill</Typography>
    //   </Box>

    //   <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
    //     <Typography variant="subtitle1">Account Name</Typography>
    //     <Typography variant="subtitle1">Bank name, Account Number</Typography>
    //   </Box>

    //   <List>
    //     <ListItem>
    //       <ListItemAvatar>
    //         <Avatar sx={{ bgcolor: green[500] }} />
    //       </ListItemAvatar>
    //       <ListItemText primary="Friend’s name 1" secondary="300฿" />
    //     </ListItem>
    //     <Divider variant="inset" component="li" />
    //     {/* Repeat the ListItem component for each friend */}
    //   </List>

    //   <Box sx={{ bgcolor: 'error.main', color: 'white', p: 2, my: 2 }}>
    //     <Typography variant="h6">Friends who didn't pay</Typography>
    //     <Typography variant="subtitle1">No friend who didn't pay.</Typography>
    //   </Box>

    //   <Button variant="contained" color="secondary" fullWidth>
    //     Cancel this bill
    //   </Button>
    // </Container>
  )
}

export default PaymentDetailsTab
