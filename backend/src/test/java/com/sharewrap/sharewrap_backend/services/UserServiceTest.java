package com.sharewrap.sharewrap_backend.services;

import com.sharewrap.sharewrap_backend.dtos.LoginDto;
import com.sharewrap.sharewrap_backend.dtos.PromptpayDto;
import com.sharewrap.sharewrap_backend.dtos.RegisterDto;
import com.sharewrap.sharewrap_backend.dtos.UserDto;
import com.sharewrap.sharewrap_backend.exceptions.AppException;
import com.sharewrap.sharewrap_backend.exceptions.UserExceptionHandler;
import com.sharewrap.sharewrap_backend.exceptions.UserExceptionHandlerTests;
import com.sharewrap.sharewrap_backend.mappers.PromptpayMapper;
import com.sharewrap.sharewrap_backend.mappers.UserMapper;
import com.sharewrap.sharewrap_backend.models.Bill;
import com.sharewrap.sharewrap_backend.models.Promptpay;
import com.sharewrap.sharewrap_backend.models.User;
import com.sharewrap.sharewrap_backend.repositories.BillRepository;
import com.sharewrap.sharewrap_backend.repositories.PromptpayRepository;
import com.sharewrap.sharewrap_backend.repositories.UserRepository;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.core.MethodParameter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.MethodArgumentNotValidException;

import java.io.ByteArrayOutputStream;
import java.io.PrintStream;
import java.util.*;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;
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
    public void test_register_null_email() {
        // Arrange
        UserRepository userRepository = Mockito.mock(UserRepository.class);
        PasswordEncoder passwordEncoder = Mockito.mock(PasswordEncoder.class);
        UserMapper userMapper = Mockito.mock(UserMapper.class);
        BillRepository billRepository = Mockito.mock(BillRepository.class);

        UserService userService = new UserService(userRepository, passwordEncoder, userMapper, billRepository);

        RegisterDto userDto = new RegisterDto(null, "testuser", "password".toCharArray());

        // Act and Assert
        assertThrows(NullPointerException.class, () -> userService.register(userDto));
        verify(userRepository, never()).findByEmail(anyString());
    }
    @Test
    public void test_register_existing_email() {
        // Arrange
        UserRepository userRepository = Mockito.mock(UserRepository.class);
        PasswordEncoder passwordEncoder = Mockito.mock(PasswordEncoder.class);
        UserMapper userMapper = Mockito.mock(UserMapper.class);
        BillRepository billRepository = Mockito.mock(BillRepository.class);

        UserService userService = new UserService(userRepository, passwordEncoder, userMapper, billRepository);
        RegisterDto userDto = new RegisterDto("test@example.com", "testuser", "password".toCharArray());
        User existingUser = new User("test@example.com", "existinguser");

        when(userRepository.findByEmail(userDto.getEmail())).thenReturn(Optional.of(existingUser));

        // Act and Assert
        assertThrows(AppException.class, () -> userService.register(userDto));
        verify(userRepository).findByEmail(userDto.getEmail());
    }
    @Test
    public void test_invalid_user_id() {
        // Arrange
        UserRepository userRepository = Mockito.mock(UserRepository.class);
        PasswordEncoder passwordEncoder = Mockito.mock(PasswordEncoder.class);
        UserMapper userMapper = Mockito.mock(UserMapper.class);
        BillRepository billRepository = Mockito.mock(BillRepository.class);

        UserService userService = new UserService(userRepository, passwordEncoder, userMapper, billRepository);
        String userId = "invalidUserId";
        Bill bill = new Bill();

        // Act and Assert
        try {
            userService.addBill(userId, bill);
            fail("Expected AppException, but no exception was thrown");
        } catch (AppException e) {
            assertEquals("Unknown user", e.getMessage());
        }
    }
    @Test
    void test_add_bills_null_user_id() {
        // Arrange
        UserRepository userRepository = Mockito.mock(UserRepository.class);
        PasswordEncoder passwordEncoder = Mockito.mock(PasswordEncoder.class);
        UserMapper userMapper = Mockito.mock(UserMapper.class);
        BillRepository billRepository = Mockito.mock(BillRepository.class);
        UserService userService = new UserService(userRepository, passwordEncoder, userMapper, billRepository);
        String userId = null;
        List<Bill> billList = new ArrayList<>();
        Bill bill1 = new Bill("Bill 1");
        Bill bill2 = new Bill("Bill 2");
        billList.add(bill1);
        billList.add(bill2);

        // Act and Assert
        AppException exception = assertThrows(AppException.class, () -> userService.addBills(userId, billList));
        assertEquals("Unknown user", exception.getMessage());
    }
    @Test
    public void test_add_bills_unknown_user() {
        // Arrange
        UserRepository userRepository = Mockito.mock(UserRepository.class);
        PasswordEncoder passwordEncoder = Mockito.mock(PasswordEncoder.class);
        UserMapper userMapper = Mockito.mock(UserMapper.class);
        BillRepository billRepository = Mockito.mock(BillRepository.class);
        UserService userService = new UserService(userRepository, passwordEncoder, userMapper, billRepository);

        // Mock the UserRepository to return an empty optional when findById is called
        when(userRepository.findById("user123")).thenReturn(Optional.empty());

        String userId = "user123";
        List<Bill> billList = new ArrayList<>();
        Bill bill1 = new Bill("Bill 1");
        Bill bill2 = new Bill("Bill 2");
        billList.add(bill1);
        billList.add(bill2);

        // Act and Assert
        assertThrows(AppException.class, () -> userService.addBills(userId, billList));

        // Verify that findById was called with the correct user ID
        verify(userRepository, times(1)).findById(userId);

        // Verify that no interactions happened with other mocks
        verifyNoMoreInteractions(userRepository, passwordEncoder, userMapper, billRepository);
    }
    @Test
    public void test_null_user_id() {
        // Arrange
        String userId = null;
        String friendId = "friend1";

        UserRepository userRepository = mock(UserRepository.class);

        // Assuming you have a user in the repository for the friend
        User friendUser = new User();
        when(userRepository.findById(friendId)).thenReturn(Optional.of(friendUser));

        UserService userService = new UserService(userRepository, null, null, null);

        // Act and Assert
        assertThrows(AppException.class, () -> userService.deleteFriend(userId, friendId));
    }
    @Test
    public void test_valid_username() {
        // Arrange
        UserRepository userRepository = Mockito.mock(UserRepository.class);
        PasswordEncoder passwordEncoder = Mockito.mock(PasswordEncoder.class);
        UserMapper userMapper = Mockito.mock(UserMapper.class);
        BillRepository billRepository = Mockito.mock(BillRepository.class);
        UserService userService = new UserService(userRepository, passwordEncoder, userMapper, billRepository);
        String validUsername = "john_doe";

        // Mock behavior of userRepository.findByUsername to return an empty Optional
        when(userRepository.findByUsername(validUsername)).thenReturn(Optional.empty());

        // Act and Assert
        AppException exception = assertThrows(AppException.class, () -> userService.findByUsername(validUsername));
        assertEquals("Unknown user", exception.getMessage());
    }
    @Test
    public void test_correct_userDto() {
        // Arrange
        UserRepository userRepository = Mockito.mock(UserRepository.class);
        PasswordEncoder passwordEncoder = Mockito.mock(PasswordEncoder.class);
        UserMapper userMapper = Mockito.mock(UserMapper.class);
        BillRepository billRepository = Mockito.mock(BillRepository.class);
        UserService userService = new UserService(userRepository, passwordEncoder, userMapper, billRepository);
        String validUsername = "john_doe";
        User expectedUser = new User("john.doe@example.com", validUsername);
        UserDto expectedUserDto = new UserDto(expectedUser.getId(), expectedUser.getEmail(), expectedUser.getUsername(), "");
        when(userRepository.findByUsername(validUsername)).thenReturn(Optional.of(expectedUser));

        // Act
        UserDto result = userService.findByUsername(validUsername);

        // Assert
        assertEquals(expectedUserDto, result);
    }
    @Test
    public void test_valid_username_findByUsername() {
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