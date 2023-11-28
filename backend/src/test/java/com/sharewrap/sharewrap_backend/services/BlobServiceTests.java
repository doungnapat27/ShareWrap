package com.sharewrap.sharewrap_backend.services;

import org.junit.Test;

import static org.hibernate.validator.internal.util.Contracts.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;

public class BlobServiceTests {
    @Test
    public void test_small_input() {
        byte[] imageData = {1};
        String expected = "AQ==";
        String result = BlobService.convertToBase64(imageData);
        assertEquals(expected, result);
    }
    @Test
    public void test_non_image_data() {
        byte[] imageData = "Hello World".getBytes();
        String expected = "SGVsbG8gV29ybGQ=";
        String result = BlobService.convertToBase64(imageData);
        assertEquals(expected, result);
    }
    @Test
    public void test_large_input() {
        byte[] imageData = new byte[1000000];
        for (int i = 0; i < imageData.length; i++) {
            imageData[i] = (byte) (i % 256);
        }
        String result = BlobService.convertToBase64(imageData);
        assertNotNull(result);
    }

    @Test
    public void test_invalid_input() {
        byte[] imageData = {1, 2, 3, 4, 5};
        String result = BlobService.convertToBase64(imageData);
        assertNotNull(result);

        imageData = null;
        result = BlobService.convertToBase64(imageData);
        assertNull(result);
    }
    @Test
    public void test_null_or_empty_input() {
        byte[] imageData = null;
        String result = BlobService.convertToBase64(imageData);
        assertNull(result);

        imageData = new byte[0];
        result = BlobService.convertToBase64(imageData);
        assertNull(result);
    }
}
