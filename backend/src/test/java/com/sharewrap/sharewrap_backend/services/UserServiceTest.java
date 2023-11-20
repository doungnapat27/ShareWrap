package com.sharewrap.sharewrap_backend.services;

import com.sharewrap.sharewrap_backend.dtos.LoginDto;
import com.sharewrap.sharewrap_backend.exceptions.AppException;
import com.sharewrap.sharewrap_backend.mappers.UserMapper;
import com.sharewrap.sharewrap_backend.models.User;
import com.sharewrap.sharewrap_backend.repositories.BillRepository;
import com.sharewrap.sharewrap_backend.repositories.UserRepository;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.io.ByteArrayOutputStream;
import java.io.PrintStream;
import java.util.Optional;

import static org.hibernate.validator.internal.util.Contracts.assertNotNull;
import static org.hibernate.validator.internal.util.Contracts.assertTrue;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class UserServiceTest {
    // Test case 1 - login interface based
//    @Test
//    public void testLoginValidCredentials() {
//        // Mock dependencies
//        UserRepository userRepository = Mockito.mock(UserRepository.class);
//        PasswordEncoder passwordEncoder = Mockito.mock(PasswordEncoder.class);
//        UserMapper userMapper = Mockito.mock(UserMapper.class);
//        BillRepository billRepository = Mockito.mock(BillRepository.class);
//
//        // Create test data
//        LoginDto loginDto = new LoginDto("test@example.com", "password".toCharArray()); // Get raw data
//        User user = new User("test@example.com", "test");
//        user.setPassword("password");
//        // Mock repository methods
//        Mockito.when(userRepository.findByEmail(loginDto.getEmail())).thenReturn(Optional.of(user));
//        Mockito.when(passwordEncoder.matches(Mockito.any(CharSequence.class), Mockito.anyString())).thenReturn(true);
//
//// Assert
//        assertEquals("true", result1);
//    }
    // Test case 1 - login functionality based
    @Test
    public void test_valid_login_credentials_logging() {
        // Mock dependencies
        UserRepository userRepository = Mockito.mock(UserRepository.class);
        PasswordEncoder passwordEncoder = Mockito.mock(PasswordEncoder.class);
        UserMapper userMapper = Mockito.mock(UserMapper.class);
        BillRepository billRepository = Mockito.mock(BillRepository.class);

        // Create test data
        LoginDto loginDto = new LoginDto("test@example.com", "password".toCharArray()); //Get raw data
        User user = new User("test@example.com", "test");
        user.setPassword("password");

        // Mock repository methods
        when(userRepository.findByEmail(loginDto.getEmail())).thenReturn(Optional.of(user));
        when(passwordEncoder.matches(Mockito.any(CharSequence.class), Mockito.anyString())).thenReturn(true);

        // Create instance of UserService
        UserService userService = new UserService(userRepository, passwordEncoder, userMapper, billRepository);

        // Redirect console output to ByteArrayOutputStream
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        PrintStream printStream = new PrintStream(outputStream);
        System.setOut(printStream);

        // Invoke the method being tested
        userService.login(loginDto);

        // Restore console output
        System.setOut(System.out);

        // Assert the console output
        assertEquals("logging  in...", outputStream.toString().trim());
    }

    @Test
    public void test_invalid_login_credentials_log_message() {
        // Mock dependencies
        UserRepository userRepository = Mockito.mock(UserRepository.class);
        PasswordEncoder passwordEncoder = Mockito.mock(PasswordEncoder.class);
        UserMapper userMapper = Mockito.mock(UserMapper.class);
        BillRepository billRepository = Mockito.mock(BillRepository.class);

        // Create test data
        LoginDto loginDto = new LoginDto("test_invalid@example.com", "wrongPassword".toCharArray());
        User user = new User("test_invalid@example.com", "test");
        user.setPassword("encodedPassword");

        // Mock repository methods
        when(userRepository.findByEmail(loginDto.getEmail())).thenReturn(Optional.of(user));
        when(passwordEncoder.matches(Mockito.any(CharSequence.class), Mockito.anyString())).thenReturn(false);

        // Create instance of UserService
        UserService userService = new UserService(userRepository, passwordEncoder, userMapper, billRepository);

        // Redirect console output to ByteArrayOutputStream
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        PrintStream printStream = new PrintStream(outputStream);
        System.setOut(printStream);

        // Invoke the method being tested
        try {
            userService.login(loginDto);
        } catch (AppException e) {
            // Ignore exception
        }

        // Restore console output
        System.setOut(System.out);

        // Assert the log message
        assertEquals("", outputStream.toString().trim());
    }
    // Test case 2 - generateUniqueUserId interface based
    @Test
    public void test_generateUniqueUserId_notInUse() {
        UserRepository userRepository = Mockito.mock(UserRepository.class);
        Mockito.when(userRepository.existsById(Mockito.anyString())).thenReturn(false);
        PasswordEncoder passwordEncoder = Mockito.mock(PasswordEncoder.class);
        UserMapper userMapper = Mockito.mock(UserMapper.class);
        BillRepository billRepository = Mockito.mock(BillRepository.class);

        UserService userService = new UserService(userRepository, passwordEncoder, userMapper, billRepository);
        String username = "john_doe";

        String userId = userService.generateUniqueUserId(username);

        assertNotNull(userId);
        assertFalse(userRepository.existsById(userId));
    }
    // Test case 2 - generateUniquesUserId functionality based
    @Test
    public void test_generateUniqueUserId_differentUsernames() {
        UserRepository userRepository = Mockito.mock(UserRepository.class);
        PasswordEncoder passwordEncoder = Mockito.mock(PasswordEncoder.class);
        UserMapper userMapper = Mockito.mock(UserMapper.class);
        BillRepository billRepository = Mockito.mock(BillRepository.class);

        UserService userService = new UserService(userRepository, passwordEncoder, userMapper, billRepository);
        String username1 = "john_doe";
        String username2 = "jane_smith";

        String userId1 = userService.generateUniqueUserId(username1);
        String userId2 = userService.generateUniqueUserId(username2);

        assertNotEquals(userId1, userId2);
    }
    @Test
    public void test_generateUniqueUserId_sameUsernames() {
        UserRepository userRepository = Mockito.mock(UserRepository.class);
        PasswordEncoder passwordEncoder = Mockito.mock(PasswordEncoder.class);
        UserMapper userMapper = Mockito.mock(UserMapper.class);
        BillRepository billRepository = Mockito.mock(BillRepository.class);

        UserService userService = new UserService(userRepository, passwordEncoder, userMapper, billRepository);
        String username1 = "john_doe";
        String username2 = "john_doe";

        String userId1 = userService.generateUniqueUserId(username1);
        String userId2 = userService.generateUniqueUserId(username2);
        boolean result = false;
        if (userId1 == userId2) {
            result = true;
        }
        assertEquals(false, result);
    }
    // Test case 3 - generateUserId interface based
    @Test
    public void test_generateUserId_length() {
        UserRepository userRepository = Mockito.mock(UserRepository.class);
        PasswordEncoder passwordEncoder = Mockito.mock(PasswordEncoder.class);
        UserMapper userMapper = Mockito.mock(UserMapper.class);
        BillRepository billRepository = Mockito.mock(BillRepository.class);

        UserService userService = new UserService(userRepository, passwordEncoder, userMapper, billRepository);
        String username = "john_doe";
        String result = userService.generateUserId(username);
        assertEquals(username.length() + 6, result.length());
    }
    @Test
    public void test_generateUserId_length1() {
        UserRepository userRepository = Mockito.mock(UserRepository.class);
        PasswordEncoder passwordEncoder = Mockito.mock(PasswordEncoder.class);
        UserMapper userMapper = Mockito.mock(UserMapper.class);
        BillRepository billRepository = Mockito.mock(BillRepository.class);

        UserService userService = new UserService(userRepository, passwordEncoder, userMapper, billRepository);
        String username = "";
        String result = userService.generateUserId(username);
        assertEquals(username.length() + 6, result.length());
    }
    // Test case 3 - generateUserId functionality based
    @Test
    public void test_generateUserId_oneCharacter() {
        UserRepository userRepository = Mockito.mock(UserRepository.class);
        PasswordEncoder passwordEncoder = Mockito.mock(PasswordEncoder.class);
        UserMapper userMapper = Mockito.mock(UserMapper.class);
        BillRepository billRepository = Mockito.mock(BillRepository.class);

        UserService userService = new UserService(userRepository, passwordEncoder, userMapper, billRepository);
        String username = "a";
        String result = userService.generateUserId(username);
        assertEquals(7, result.length());
    }
}