import React from 'react'
import {
  Box,
} from '@mui/material'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ padding: "30px 32px" }}>
          <Box>{children}</Box>
        </Box>
      )}
    </Box>
  );
}

export default TabPanel
