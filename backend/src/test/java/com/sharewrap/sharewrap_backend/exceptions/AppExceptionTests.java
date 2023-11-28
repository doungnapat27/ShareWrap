package com.sharewrap.sharewrap_backend.exceptions;
import com.sharewrap.sharewrap_backend.exceptions.AppException;
import org.junit.Test;
import org.springframework.http.HttpStatus;

import static junit.framework.TestCase.assertEquals;
public class AppExceptionTests {
    @Test
    public void test_createInstanceWithMessageAndStatus() {
        String message = "Test Message";
        HttpStatus status = HttpStatus.OK;

        AppException exception = new AppException(message, status);

        assertEquals(message, exception.getMessage());
        assertEquals(status, exception.getStatus());
    }
}
