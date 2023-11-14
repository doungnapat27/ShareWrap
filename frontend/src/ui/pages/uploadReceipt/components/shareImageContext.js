// ShareImageContext.js
import React, { createContext, useState, useContext } from 'react';

export const ShareImageContext = createContext();

export const ShareImageProvider = ({ children }) => {
  const [uploadImage, setUploadImage] = useState(() => {
    const storedImage = localStorage.getItem('uploadImage');
    return storedImage ? storedImage : null;
  });
  const [showImage, setShowImage] = useState(false);

  const handleUploadFile = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64data = reader.result;
      setUploadImage(base64data);

      try {
        localStorage.setItem('uploadImage', base64data);
        console.log('The image saved into localStorage');
      } catch (error) {
        console.error('Error saving to local storage:', error);
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleChange = () => {
    if (uploadImage !== null) {
      setShowImage(true);
      localStorage.setItem('showImage', JSON.stringify(true));
    }
  };  

  return (
    <ShareImageContext.Provider
      value={{
        uploadImage,
        handleUploadFile,
        handleChange,
        showImage,
      }}
    >
      {children}
    </ShareImageContext.Provider>
  );
};
