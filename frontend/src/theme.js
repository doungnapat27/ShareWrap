import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: [
      'Inter',
    ],
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    h2: {
      fontFamily: 'Inter',
      fontSize: 32,
      fontStyle: 'normal',
      fontWeight: 600,
    },
    h3: {
      fontFamily: 'Inter',
      fontSize: 24,
      fontStyle: 'normal',
      fontWeight: 600,
    },
    h4: {
      fontFamily: 'Inter',
      fontSize: 20,
      fontWeight: 'bold',
      fontStyle: 'normal',
    },
    h5: {
      fontFamily: 'Inter',
      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: 600,
    },
    h6: {
      fontFamily: 'Inter',
      fontSize: 10,
      fontStyle: 'normal',
      fontWeight: 600,
    },
  },
})

export default theme