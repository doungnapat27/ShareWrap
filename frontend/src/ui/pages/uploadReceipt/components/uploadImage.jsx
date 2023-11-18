import React, { useContext } from "react";
import { Box, Button, Snackbar } from "@mui/material";
import { ShareImageContext } from "./shareImageContext";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import MuiAlert from "@mui/material/Alert";

function UploadImage() {
  const {
    uploadImage,
    handleUploadFile,
    handleChange,
    showImage,
    snackbarOpen,
    snackbarMessage,
    snackbarSeverity,
    setSnackbarOpen,
  } = useContext(ShareImageContext);


  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <Box mt={4}>
      <input
        type="file"
        id="file-upload"
        accept="image/*"
        onChange={handleUploadFile}
      />
      {console.log("upload image in upload compo", uploadImage)}
      {console.log("show image in upload compo", showImage)}

      <Button
        onClick={handleChange}
        disabled={uploadImage === null}
        sx={{
          width: "100%",
          backgroundColor: uploadImage === null ? "#838383" : "#FFB53B",
          color: uploadImage === null ? "white !important" : "black !important",
          borderRadius: "10px",
          paddingTop: "15px",
          paddingBottom: "15px",
          boxShadow: "1",
          marginTop: "20px",
        }}
      >
        <FileUploadOutlinedIcon />
        Upload image
      </Button>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
        >
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </Box>
  );
}

export default UploadImage;
