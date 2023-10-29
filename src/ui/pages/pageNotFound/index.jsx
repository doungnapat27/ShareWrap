import React from "react";
import { Typography, Box } from "@mui/material";

function PageNotFound() {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h1" sx={{ color: "red" }}>
        Please take a nap before continue working (Wrong page na ja ;) )
      </Typography>
    </Box>
  );
}

export default PageNotFound;
