package com.sharewrap.sharewrap_backend.services;

import com.sharewrap.sharewrap_backend.dtos.LoginDto;
import com.sharewrap.sharewrap_backend.dtos.UserDto;
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

public class UserServiceTest {
    // Test case 1 - interface based
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
    // Test case 1 - functionality based
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
        Mockito.when(userRepository.findByEmail(loginDto.getEmail())).thenReturn(Optional.of(user));
        Mockito.when(passwordEncoder.matches(Mockito.any(CharSequence.class), Mockito.anyString())).thenReturn(true);

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
        Mockito.when(userRepository.findByEmail(loginDto.getEmail())).thenReturn(Optional.of(user));
        Mockito.when(passwordEncoder.matches(Mockito.any(CharSequence.class), Mockito.anyString())).thenReturn(false);

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


}