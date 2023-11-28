package com.sharewrap.sharewrap_backend.exceptions;

import com.sharewrap.sharewrap_backend.exceptions.UserExceptionHandler;
import org.glassfish.jaxb.runtime.v2.schemagen.xmlschema.List;
import org.springframework.core.MethodParameter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.testng.annotations.Test;
import org.mockito.Mockito;

import static org.testng.Assert.assertEquals;

public class UserExceptionHandlerTests {
    private BindingResult bindingResult;

    @Test
    public void test_http_status_code_400() throws NoSuchMethodException {
        // Arrange
        UserExceptionHandler userExceptionHandler = new UserExceptionHandler();
        MethodParameter methodParameter = new MethodParameter(UserExceptionHandlerTests.class.getMethod("dummyMethod"), -1);
        bindingResult = Mockito.mock(BindingResult.class);

        MethodArgumentNotValidException exception = new MethodArgumentNotValidException(methodParameter, bindingResult);
        ResponseEntity<?> responseEntity = userExceptionHandler.handleValidationExceptions(exception);

        // Assert
        assertEquals(HttpStatus.BAD_REQUEST, responseEntity.getStatusCode());
    }

}