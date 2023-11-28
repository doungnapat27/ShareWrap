package com.sharewrap.sharewrap_backend.dtos;

import jakarta.validation.ConstraintViolationException;
import org.junit.Test;

import static org.hibernate.validator.internal.util.Contracts.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class RegisterDtoTests {
    @Test
    public void test_valid_instance_creation() {
        RegisterDto registerDto = new RegisterDto("test@example.com", "testuser", "password".toCharArray());
        assertNotNull(registerDto);
    }
    @Test
    public void test_field_accessibility() {
        RegisterDto registerDto = new RegisterDto();
        registerDto.setEmail("test@example.com");
        registerDto.setUsername("testuser");
        registerDto.setPassword("password".toCharArray());

        assertEquals("test@example.com", registerDto.getEmail());
        assertEquals("testuser", registerDto.getUsername());
        assertArrayEquals("password".toCharArray(), registerDto.getPassword());
    }
    @Test(expected = ConstraintViolationException.class)
    public void test_empty_username_exception() {
        RegisterDto registerDto = new RegisterDto("test@example.com", "", "password".toCharArray());
    }
}
