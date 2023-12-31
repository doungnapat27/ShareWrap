// ShareImageContext.js
import React, { createContext, useState} from "react";
import { request } from "../../../../helpers/axios_helper";

export const ShareImageContext = createContext();

export const ShareImageProvider = ({ children }) => {
  const [uploadImage, setUploadImage] = useState(() => {
    const storedImage = localStorage.getItem("uploadImage");
    return storedImage ? storedImage : null;
  });
  const [showImage, setShowImage] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [isUploading, setIsUploading] = useState(false);

  const handleUploadFile = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();


    reader.onloadend = () => {
      const base64data = reader.result;
      setUploadImage(base64data);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleChange = async (event) => {
    event.preventDefault();

    if (uploadImage !== null) {
      setIsUploading(true);
      setShowImage(true);
      localStorage.setItem("showImage", JSON.stringify(true));

      try {
        const response = await request(
          "PUT",
          "/receipt/userBill/" + window.location.pathname.split("/")[3],
          uploadImage
        );
        if (response.status === 200) {
          console.log("Bill is paid");
        }
        setSnackbarOpen(true);
        setSnackbarMessage(response.data);
        setSnackbarSeverity("success");
        window.location.href =
            "/receipt-uploaded/" + window.location.pathname.split("/")[3];
      } catch (error) {
        setSnackbarOpen(true);
        setSnackbarSeverity("error");
        setSnackbarMessage(error.message);
        console.log(error);
      } finally {
        setIsUploading(false);
      }
    }
  };

  return (
    <ShareImageContext.Provider
      value={{
        uploadImage,
        handleUploadFile,
        handleChange,
        showImage,
        snackbarOpen,
        snackbarMessage,
        snackbarSeverity,
        isUploading,
        setSnackbarOpen,
      }}
    >
      {children}
    </ShareImageContext.Provider>
  );
};
