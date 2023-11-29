package com.sharewrap.sharewrap_backend.dtos;

import org.junit.Test;

import static org.hibernate.validator.internal.util.Contracts.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class UserDtoTests {
    @Test
    public void test_createUserDtoWithValidParameters() {
        UserDto userDto = new UserDto("1", "test@example.com", "testuser", "token");
        assertNotNull(userDto);
        assertEquals("1", userDto.getId());
        assertEquals("test@example.com", userDto.getEmail());
        assertEquals("testuser", userDto.getUsername());
        assertEquals("token", userDto.getToken());
    }
}
