package com.sharewrap.sharewrap_backend.services;

import com.sharewrap.sharewrap_backend.dtos.LoginDto;
import com.sharewrap.sharewrap_backend.dtos.PromptpayDto;
import com.sharewrap.sharewrap_backend.dtos.UserDto;
import com.sharewrap.sharewrap_backend.exceptions.AppException;
import com.sharewrap.sharewrap_backend.mappers.PromptpayMapper;
import com.sharewrap.sharewrap_backend.mappers.UserMapper;
import com.sharewrap.sharewrap_backend.models.Promptpay;
import com.sharewrap.sharewrap_backend.models.User;
import com.sharewrap.sharewrap_backend.repositories.BillRepository;
import com.sharewrap.sharewrap_backend.repositories.PromptpayRepository;
import com.sharewrap.sharewrap_backend.repositories.UserRepository;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.io.ByteArrayOutputStream;
import java.io.PrintStream;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class UserServiceTest {
    // Test case 1 - login
    // Test case 1 - login interface based (T1)
    @Test
    public void test_valid_login_credentials_print_logging_in() {
        UserRepository userRepository = Mockito.mock(UserRepository.class);
        PasswordEncoder passwordEncoder = Mockito.mock(PasswordEncoder.class);
        UserMapper userMapper = Mockito.mock(UserMapper.class);
        BillRepository billRepository = Mockito.mock(BillRepository.class);
        boolean result = false;
        LoginDto loginDto = new LoginDto("test@example.com", "password".toCharArray());
        User user = new User("test@example.com", "test");
        user.setPassword("password");

        when(userRepository.findByEmail(loginDto.getEmail())).thenReturn(Optional.of(user));
        when(passwordEncoder.matches(Mockito.any(CharSequence.class), Mockito.anyString())).thenReturn(true);

        UserService userService = new UserService(userRepository, passwordEncoder, userMapper, billRepository);

        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        System.setOut(new PrintStream(outputStream));

        userService.login(loginDto);

        if("logging  in...".equals(outputStream.toString().trim())){
            result = true;
        }
        assertTrue(result);
    }
    // Test case 1 - login interface based (T2)
    @Test
    public void test_valid_login_with_invalid_password() {
        UserRepository userRepository = Mockito.mock(UserRepository.class);
        PasswordEncoder passwordEncoder = Mockito.mock(PasswordEncoder.class);
        UserMapper userMapper = Mockito.mock(UserMapper.class);
        BillRepository billRepository = Mockito.mock(BillRepository.class);
        boolean result = true;
        LoginDto loginDto = new LoginDto("test@example.com", "wrongpassword".toCharArray());
        User user = new User("test@example.com", "test");
        user.setPassword("password");

        when(userRepository.findByEmail(loginDto.getEmail())).thenReturn(Optional.of(user));
        when(passwordEncoder.matches(Mockito.any(CharSequence.class), Mockito.anyString())).thenReturn(false);

        UserService userService = new UserService(userRepository, passwordEncoder, userMapper, billRepository);

        try {
            userService.login(loginDto);
            fail("Expected AppException to be thrown");
        } catch (AppException e) {
            if (HttpStatus.BAD_REQUEST == e.getStatus() && "Invalid password" == e.getMessage()){
                result = false;
            }
        }
        assertFalse(result);
    }
    // Test case 1 - login interface based (T3)
    @Test
    public void test_valid_login_with_invalid_email() {
        UserRepository userRepository = Mockito.mock(UserRepository.class);
        PasswordEncoder passwordEncoder = Mockito.mock(PasswordEncoder.class);
        UserMapper userMapper = Mockito.mock(UserMapper.class);
        BillRepository billRepository = Mockito.mock(BillRepository.class);
        boolean result = true;
        LoginDto loginDto = new LoginDto("", "password".toCharArray());

        UserService userService = new UserService(userRepository, passwordEncoder, userMapper, billRepository);

        AppException exception = assertThrows(AppException.class, () -> userService.login(loginDto));
        if(HttpStatus.NOT_FOUND == exception.getStatus()) {
            result = false;
        }
        assertFalse(result);
    }
    // Test case 1 - login interface based (T4)
    @Test
    public void test_valid_login_with_invalid_email_invalid_password() {
        UserRepository userRepository = Mockito.mock(UserRepository.class);
        PasswordEncoder passwordEncoder = Mockito.mock(PasswordEncoder.class);
        UserMapper userMapper = Mockito.mock(UserMapper.class);
        BillRepository billRepository = Mockito.mock(BillRepository.class);
        boolean result = true;
        LoginDto loginDto = new LoginDto("", "wrongpassword".toCharArray());
        User user = new User("test@example.com", "test");
        user.setPassword("password");

        when(userRepository.findByEmail(loginDto.getEmail())).thenReturn(Optional.of(user));
        when(passwordEncoder.matches(Mockito.any(CharSequence.class), Mockito.anyString())).thenReturn(false);

        UserService userService = new UserService(userRepository, passwordEncoder, userMapper, billRepository);

        AppException exception = assertThrows(AppException.class, () -> userService.login(loginDto));
        if(HttpStatus.BAD_REQUEST == exception.getStatus()){
            result = false;
        }
        assertFalse(result);
    }
    // Test case 1 - login functionality based
    // Test case 1 - login functionality based (T1)
    @Test
    public void test_valid_login_func() {
        UserRepository userRepository = Mockito.mock(UserRepository.class);
        PasswordEncoder passwordEncoder = Mockito.mock(PasswordEncoder.class);
        UserMapper userMapper = Mockito.mock(UserMapper.class);
        BillRepository billRepository = Mockito.mock(BillRepository.class);

        LoginDto loginDto = new LoginDto("test@example.com", "password".toCharArray());
        User user = new User("test@example.com", "test");
        user.setPassword("password");

        when(userRepository.findByEmail(loginDto.getEmail())).thenReturn(Optional.of(user));
        when(passwordEncoder.matches(Mockito.any(CharSequence.class), Mockito.anyString())).thenReturn(true);

        UserService userService = new UserService(userRepository, passwordEncoder, userMapper, billRepository);

        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        System.setOut(new PrintStream(outputStream));

        userService.login(loginDto);

        assertEquals("logging  in...", outputStream.toString().trim());
    }
    // Test case 1 - login functionality based (T2)
    @Test
    public void test_valid_login_func_with_invalid_password() {
        UserRepository userRepository = Mockito.mock(UserRepository.class);
        PasswordEncoder passwordEncoder = Mockito.mock(PasswordEncoder.class);
        UserMapper userMapper = Mockito.mock(UserMapper.class);
        BillRepository billRepository = Mockito.mock(BillRepository.class);

        LoginDto loginDto = new LoginDto("test@example.com", "wrongpassword".toCharArray());
        User user = new User("test@example.com", "test");
        user.setPassword("password");

        when(userRepository.findByEmail(loginDto.getEmail())).thenReturn(Optional.of(user));
        when(passwordEncoder.matches(Mockito.any(CharSequence.class), Mockito.anyString())).thenReturn(false);

        UserService userService = new UserService(userRepository, passwordEncoder, userMapper, billRepository);

        try {
            userService.login(loginDto);
            fail("Expected AppException to be thrown");
        } catch (AppException e) {
            assertEquals(HttpStatus.BAD_REQUEST, e.getStatus());
            assertEquals("Invalid password", e.getMessage());
        }
    }
    // Test case 1 - login login functionality based (T3)
    @Test
    public void test_valid_login_func_with_invalid_email() {
        UserRepository userRepository = Mockito.mock(UserRepository.class);
        PasswordEncoder passwordEncoder = Mockito.mock(PasswordEncoder.class);
        UserMapper userMapper = Mockito.mock(UserMapper.class);
        BillRepository billRepository = Mockito.mock(BillRepository.class);

        LoginDto loginDto = new LoginDto("", "password".toCharArray());

        UserService userService = new UserService(userRepository, passwordEncoder, userMapper, billRepository);

        AppException exception = assertThrows(AppException.class, () -> userService.login(loginDto));
        assertEquals(HttpStatus.NOT_FOUND, exception.getStatus());
    }
    // Test case 1 - login functionality based (T4)
    @Test
    public void test_valid_login_func_with_invalid_email_invalid_password() {
        UserRepository userRepository = Mockito.mock(UserRepository.class);
        PasswordEncoder passwordEncoder = Mockito.mock(PasswordEncoder.class);
        UserMapper userMapper = Mockito.mock(UserMapper.class);
        BillRepository billRepository = Mockito.mock(BillRepository.class);
        boolean result = false;
        LoginDto loginDto = new LoginDto("", "wrongpassword".toCharArray());
        User user = new User("test@example.com", "test");
        user.setPassword("password");

        when(userRepository.findByEmail(loginDto.getEmail())).thenReturn(Optional.of(user));
        when(passwordEncoder.matches(Mockito.any(CharSequence.class), Mockito.anyString())).thenReturn(false);

        UserService userService = new UserService(userRepository, passwordEncoder, userMapper, billRepository);

        AppException exception = assertThrows(AppException.class, () -> userService.login(loginDto));
        assertEquals(HttpStatus.BAD_REQUEST, exception.getStatus());
    }

    // Test case 2 - generateUniqueUserId
    // Test case 2 - generateUniqueUserId interface based (T1)
    @Test
    public void test_generateUniqueUserId_uniqueUsername1() {
        UserRepository userRepository = Mockito.mock(UserRepository.class);
        Mockito.when(userRepository.existsById(Mockito.anyString())).thenReturn(false);
        PasswordEncoder passwordEncoder = Mockito.mock(PasswordEncoder.class);
        UserMapper userMapper = Mockito.mock(UserMapper.class);
        BillRepository billRepository = Mockito.mock(BillRepository.class);

        UserService userService = new UserService(userRepository, passwordEncoder, userMapper, billRepository);
        String username = "john_doe";
        String userId = userService.generateUniqueUserId(username);
        assertFalse(username.length()+3 == userId.length());
    }
    // Test case 2 - generateUniqueUserId interface based (T2)
    @Test
    public void test_generateUniqueUserId_uniqueUsername2() {
        UserRepository userRepository = Mockito.mock(UserRepository.class);
        Mockito.when(userRepository.existsById(Mockito.anyString())).thenReturn(false);
        PasswordEncoder passwordEncoder = Mockito.mock(PasswordEncoder.class);
        UserMapper userMapper = Mockito.mock(UserMapper.class);
        BillRepository billRepository = Mockito.mock(BillRepository.class);

        UserService userService = new UserService(userRepository, passwordEncoder, userMapper, billRepository);
        String username = "john_doe";
        String userId = userService.generateUniqueUserId(username);
        assertTrue(username.length()+6 == userId.length());
    }
    // Test case 2 - generateUniqueUserId interface based (T3)
    @Test
    public void test_generateUniqueUserId_uniqueUsername3() {
        UserRepository userRepository = Mockito.mock(UserRepository.class);
        Mockito.when(userRepository.existsById(Mockito.anyString())).thenReturn(false);
        PasswordEncoder passwordEncoder = Mockito.mock(PasswordEncoder.class);
        UserMapper userMapper = Mockito.mock(UserMapper.class);
        BillRepository billRepository = Mockito.mock(BillRepository.class);

        UserService userService = new UserService(userRepository, passwordEncoder, userMapper, billRepository);
        String username = "john_doe";
        String userId = userService.generateUniqueUserId(username);
        assertFalse(username.length()+8 == userId.length());
    }
    // Test case 2 - generateUniquesUserId functionality based (T1)
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
    // Test case 2 - generateUniquesUserId functionality based (T2)
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
        assertNotEquals(userId1, userId2);
    }
    // Test case 3 - generateUserId
    // Test case 3 - generateUserId interface based (T1)
    @Test
    public void test_getUser_exist() {
        UserRepository userRepository = Mockito.mock(UserRepository.class);
        PasswordEncoder passwordEncoder = Mockito.mock(PasswordEncoder.class);
        UserMapper userMapper = Mockito.mock(UserMapper.class);
        BillRepository billRepository = Mockito.mock(BillRepository.class);

        UserService userService = new UserService(userRepository, passwordEncoder, userMapper, billRepository);
        String validUserId = "validUserId";
        boolean ans = false;
        User user = new User();
        user.setId(validUserId);
        when(userRepository.findById(validUserId)).thenReturn(Optional.of(user));
        when(userMapper.toUserDto(any(User.class)))
                .thenAnswer(invocation -> {
                    User userArgument = invocation.getArgument(0);
                    UserDto userDto = new UserDto();
                    userDto.setId(userArgument.getId());
                    return userDto;
                });
        // Act
        UserDto result = userService.getUser(validUserId);

        // Assert
        assertNotNull(result);
        if (validUserId.equals(result.getId())) {
            ans = true;
        }
        assertTrue(ans);
    }
    // Test case 3 - generateUserId interface based (T2)
    @Test
    public void test_getUser_not_found() {
        UserRepository userRepository = Mockito.mock(UserRepository.class);
        PasswordEncoder passwordEncoder = Mockito.mock(PasswordEncoder.class);
        UserMapper userMapper = Mockito.mock(UserMapper.class);
        BillRepository billRepository = Mockito.mock(BillRepository.class);
        boolean ans = true;

        UserService userService = new UserService(userRepository, passwordEncoder, userMapper, billRepository);
        String invalidUserId = "invalidUserId";
        when(userRepository.findById(invalidUserId)).thenReturn(Optional.empty());

        try {
            userService.getUser(invalidUserId);
        } catch (AppException e) {
            ans = false;
        }
        // Assert
        assertFalse(ans);
    }
    // Test case 3 - generateUserId functionality based (T1)
    @Test
    public void test_valid_userId() {
        UserRepository userRepository = Mockito.mock(UserRepository.class);
        PasswordEncoder passwordEncoder = Mockito.mock(PasswordEncoder.class);
        UserMapper userMapper = Mockito.mock(UserMapper.class);
        BillRepository billRepository = Mockito.mock(BillRepository.class);

        UserService userService = new UserService(userRepository, passwordEncoder, userMapper, billRepository);
        String validUserId = "validUserId";

        User user = new User();
        user.setId(validUserId);
        when(userRepository.findById(validUserId)).thenReturn(Optional.of(user));
        when(userMapper.toUserDto(any(User.class)))
                .thenAnswer(invocation -> {
                    User userArgument = invocation.getArgument(0);
                    UserDto userDto = new UserDto();
                    userDto.setId(userArgument.getId());
                    return userDto;
                });
        // Act
        UserDto result = userService.getUser(validUserId);

        // Assert
        assertNotNull(result);
        assertEquals(validUserId, result.getId());
    }
    // Test case 3 - generateUserId functionality based (T2)
    @Test
    public void test_getUser_not_found_func() {
        UserRepository userRepository = Mockito.mock(UserRepository.class);
        PasswordEncoder passwordEncoder = Mockito.mock(PasswordEncoder.class);
        UserMapper userMapper = Mockito.mock(UserMapper.class);
        BillRepository billRepository = Mockito.mock(BillRepository.class);

        // Arrange
        UserService userService = new UserService(userRepository, passwordEncoder, userMapper, billRepository);
        String invalidUserId = "invalidUserId";
        when(userRepository.findById(invalidUserId)).thenReturn(Optional.empty());

        // Act
        assertThrows(AppException.class, () -> userService.getUser(invalidUserId));
    }


    //Other tests
    @Test
    public void test_unknown_email() {
        UserRepository userRepository = Mockito.mock(UserRepository.class);
        PasswordEncoder passwordEncoder = Mockito.mock(PasswordEncoder.class);
        UserMapper userMapper = Mockito.mock(UserMapper.class);
        BillRepository billRepository = Mockito.mock(BillRepository.class);

        UserService userService = new UserService(userRepository, passwordEncoder, userMapper, billRepository);
        String email = "unknown@example.com";
        when(userRepository.findByEmail(email)).thenReturn(Optional.empty());

        // Act and Assert
        AppException exception = assertThrows(AppException.class, () -> userService.findByEmail(email));
        assertEquals(HttpStatus.NOT_FOUND, exception.getStatus());
    }
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

    @Test
    public void test_valid_username() {
        // Arrange
        UserRepository userRepository = mock(UserRepository.class);
        UserMapper userMapper = mock(UserMapper.class);
        PasswordEncoder passwordEncoder = mock(PasswordEncoder.class);
        BillRepository billRepository = mock(BillRepository.class);
        UserService userService = new UserService(userRepository, passwordEncoder, userMapper, billRepository);

        String username = "Unknown user";
        User user = new User();
        user.setUsername(username);
        UserDto expectedUserDto = new UserDto();

        // Define the behavior of mocks
        when(userRepository.findByUsername(username)).thenReturn(Optional.of(user));
        when(userMapper.toUserDto(user)).thenReturn(expectedUserDto);

        // Act
        UserDto result = userService.findByUsername(username);

        // Assert
        assertNotNull(result);
        assertNotNull(expectedUserDto);
        assertEquals(expectedUserDto, result);

        // Verify that the expected methods were called on mocks
        verify(userRepository).findByUsername(username);
        verify(userMapper).toUserDto(user);
    }

}