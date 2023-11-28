package com.sharewrap.sharewrap_backend.models;

import org.junit.Test;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

public class UserTests {
    @Test
    public void test_createUserWithValidEmailAndUsername() {
        User user = new User("test@example.com", "testUser");

        assertEquals("test@example.com", user.getEmail());
        assertEquals("testUser", user.getUsername());
    }
    @Test
    public void test_createUserWithEmptyEmailAndUsername() {
        User user = new User("", "");

        assertEquals("", user.getEmail());
        assertEquals("", user.getUsername());
    }
    @Test(expected = NullPointerException.class)
    public void test_throwExceptionWhenCreatingUserWithNullFields() {
        User user = new User(null, null);
    }
    @Test
    public void test_set_id_can_be_called_with_empty_string_value() {
        // Arrange
        User user = new User();
        String id = "";

        // Act
        user.setId(id);

        // Assert
        assertEquals(id, user.getId());
    }
    @Test
    public void test_setEmail_setsEmailField() {
        User user = new User();
        String email = "test@example.com";
        user.setEmail(email);
        assertEquals(email, user.getEmail());
    }
    @Test
    public void test_setUsername_validString() {
        User user = new User("test@example.com", "oldUsername");
        user.setUsername("newUsername");
        assertEquals("newUsername", user.getUsername());
    }
    @Test
    public void test_valid_password_string() {
        User user = new User();
        user.setPassword("validPassword");
        assertEquals("validPassword", user.getPassword());
    }
    @Test
    public void test_null_password_string() {
        User user = new User();
        user.setPassword(null);
        assertNull(user.getPassword());
    }
}
