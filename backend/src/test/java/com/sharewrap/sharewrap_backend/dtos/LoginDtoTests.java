package com.sharewrap.sharewrap_backend.dtos;

import org.junit.Test;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class LoginDtoTests {
    @Test
    public void test_construct_with_email_and_password() {
        LoginDto loginDto = new LoginDto("test@example.com", "password".toCharArray());
        assertEquals("test@example.com", loginDto.getEmail());
        assertArrayEquals("password".toCharArray(), loginDto.getPassword());
    }
    @Test
    public void test_construct_with_email_and_empty_password() {
        LoginDto loginDto = new LoginDto("test@example.com", new char[0]);
        assertEquals("test@example.com", loginDto.getEmail());
        assertArrayEquals(new char[0], loginDto.getPassword());
    }
    @Test
    public void test_construct_with_empty_email_and_password() {
        LoginDto loginDto = new LoginDto("", "password".toCharArray());
        assertEquals("", loginDto.getEmail());
        assertArrayEquals("password".toCharArray(), loginDto.getPassword());
    }
}
