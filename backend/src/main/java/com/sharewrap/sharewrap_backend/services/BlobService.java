package com.sharewrap.sharewrap_backend.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.sql.rowset.serial.SerialBlob;
import java.sql.Blob;
import java.util.Base64;

@RequiredArgsConstructor
@Service
public class BlobService {
    public static byte[] convertBase64ToBlob(String base64String) {
        try {
            if (base64String == null || !base64String.startsWith("data:image/png;base64,")) {
                System.err.println("Invalid or unexpected base64String format");
                return null;
            }

            // Remove the Data URL prefix
            String encodedString = base64String.substring("data:image/png;base64,".length());

            // Optional: Remove any non-Base64 characters (like non-printable characters)
            encodedString = encodedString.replaceAll("[^A-Za-z0-9+/=]", "");

            return Base64.getDecoder().decode(encodedString);
        } catch (IllegalArgumentException e) {
            System.err.println("Error decoding Base64 string: " + e.getMessage());
            return null;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public static String convertToBase64(byte[] imageData) {
        if (imageData == null || imageData.length == 0) {
            return null;
        }

        return Base64.getEncoder().encodeToString(imageData);
    }
}
