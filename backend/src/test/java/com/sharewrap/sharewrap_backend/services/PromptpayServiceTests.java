import com.sharewrap.sharewrap_backend.dtos.PromptpayDto;
import com.sharewrap.sharewrap_backend.exceptions.AppException;
import com.sharewrap.sharewrap_backend.mappers.PromptpayMapper;
import com.sharewrap.sharewrap_backend.models.Promptpay;
import com.sharewrap.sharewrap_backend.models.User;
import com.sharewrap.sharewrap_backend.repositories.PromptpayRepository;
import com.sharewrap.sharewrap_backend.repositories.UserRepository;
import com.sharewrap.sharewrap_backend.services.PromptpayService;
import jakarta.validation.ConstraintViolationException;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import static org.junit.jupiter.api.Assertions.*;


//package com.sharewrap.sharewrap_backend.services;
//
//import com.sharewrap.sharewrap_backend.dtos.PromptpayDto;
//import com.sharewrap.sharewrap_backend.mappers.PromptpayMapper;
//import com.sharewrap.sharewrap_backend.mappers.UserBillMapper;
//import com.sharewrap.sharewrap_backend.models.Promptpay;
//import com.sharewrap.sharewrap_backend.models.User;
//import com.sharewrap.sharewrap_backend.repositories.PromptpayRepository;
//import com.sharewrap.sharewrap_backend.repositories.UserRepository;
//import org.junit.Test;
//
//import java.util.Optional;
//
//import static org.hibernate.validator.internal.util.Contracts.assertNotNull;
//import static org.junit.jupiter.api.Assertions.assertEquals;
//import static org.mockito.Mockito.mock;
//import static org.mockito.Mockito.when;
//
public class PromptpayServiceTests {
//    @Test
//    public void test_valid_promptpayDto_createsAndSavesPromptpay() {
//        UserRepository userRepository = mock(UserRepository.class);
//        PromptpayRepository promptpayRepository = mock(PromptpayRepository.class);
//        PromptpayMapper promptpayMapper = mock(PromptpayMapper.class);
//        PromptpayService promptpayService = new PromptpayService(promptpayRepository, promptpayMapper, userRepository);
//
//        // Arrange
//        PromptpayDto promptpayDto = new PromptpayDto();
//        promptpayDto.setName("John Doe");
//        promptpayDto.setUserId("123");
//        promptpayDto.setPhoneNumber("1234567890");
//
//        Promptpay promptpay = new Promptpay();
//        promptpay.setName("John Doe");
//        promptpay.setPhoneNumber("1234567890");
//
//        User user = new User();
//        user.setId("123");
//
//        when(promptpayMapper.toPromptpay(promptpayDto)).thenReturn(promptpay);
//        when(userRepository.findById("123")).thenReturn(Optional.of(user));
//        when(promptpayRepository.save(promptpay)).thenReturn(promptpay);
//
//        // Act
//        PromptpayDto result = promptpayService.createPromptpay(promptpayDto);
//
//        // Assert
//        assertEquals(promptpayDto.getName(), result.getName());
//        assertEquals(promptpayDto.getUserId(), result.getUserId());
//        assertEquals(promptpayDto.getPhoneNumber(), result.getPhoneNumber());
//    }
//    @Test
//    public void test_updatePromptpay_updatesUserOfPromptpayObject() {
//        UserRepository userRepository = mock(UserRepository.class);
//        PromptpayRepository promptpayRepository = mock(PromptpayRepository.class);
//        PromptpayMapper promptpayMapper = mock(PromptpayMapper.class);
//        PromptpayService promptpayService = new PromptpayService(promptpayRepository, promptpayMapper, userRepository);
//        // Arrange
//        PromptpayDto promptpayDto = new PromptpayDto();
//        promptpayDto.setId(1L);
//        promptpayDto.setName("Test Promptpay");
//        promptpayDto.setUserId("user123");
//        promptpayDto.setPhoneNumber("1234567890");
//
//        User user = new User();
//        user.setId("user123");
//
//        Promptpay promptpay = new Promptpay();
//        promptpay.setId(1L);
//        promptpay.setName("Old Promptpay");
//        promptpay.setPhoneNumber("0987654321");
//
//        when(userRepository.findById(promptpayDto.getUserId())).thenReturn(Optional.of(user));
//        when(promptpayRepository.findById(promptpayDto.getId())).thenReturn(Optional.of(promptpay));
//
//        // Act
//        PromptpayDto result = promptpayService.updatePromptpay(promptpayDto);
//
//        // Assert
//        assertNotNull(result);
//        assertEquals(user.getId(), result.getUserId());
//    }
//    @Test
//    public void test_valid_promptpay() {
//        // Arrange
//        PromptpayDto promptpayDto = new PromptpayDto();
//        promptpayDto.setName("John Doe");
//        promptpayDto.setUserId("123456789");
//        promptpayDto.setPhoneNumber("1234567890");
//        UserRepository userRepository = Mockito.mock(UserRepository.class);
//        PromptpayMapper promptpayMapper = Mockito.mock(PromptpayMapper.class);
//        PromptpayRepository promptpayRepository = Mockito.mock(PromptpayRepository.class);
//        PromptpayService promptpayService = new PromptpayService(promptpayRepository, promptpayMapper, userRepository);
//
//        User user = new User();
//        user.setId("123456789");
//
//        when(userRepository.findById(String.valueOf(anyLong()))).thenReturn(Optional.of(user));
//        Promptpay promptpay = new Promptpay();
//        promptpay.setId(1L);
//        promptpay.setName("John Doe");
//        promptpay.setPhoneNumber("1234567890");
//
//        when(promptpayMapper.toPromptpay(promptpayDto)).thenReturn(promptpay);
//        when(promptpayRepository.save(promptpay)).thenReturn(promptpay);
//        when(promptpayMapper.toPromptpayDto(promptpay)).thenReturn(promptpayDto);
//
//        // Act
//        PromptpayDto result = promptpayService.createPromptpay(promptpayDto);
//
//        // Assert
//        assertNotNull(user.getPayments());
//        assertNotNull(result);
//        assertEquals(promptpayDto.getName(), result.getName());
//        assertEquals(promptpayDto.getUserId(), result.getUserId());
//        assertEquals(promptpayDto.getPhoneNumber(), result.getPhoneNumber());
//    }
//@Test
//public void test_user_not_found() {
//    // Arrange
//    PromptpayDto promptpayDto = new PromptpayDto();
//    promptpayDto.setName("John Doe");
//    promptpayDto.setUserId("12345");
//    promptpayDto.setPhoneNumber("1234567890");
//    UserRepository userRepository = Mockito.mock(UserRepository.class);
//    PromptpayMapper promptpayMapper = Mockito.mock(PromptpayMapper.class);
//    PromptpayRepository promptpayRepository = Mockito.mock(PromptpayRepository.class);
//    PromptpayService promptpayService = new PromptpayService(promptpayRepository, promptpayMapper, userRepository);
//    when(userRepository.findById("12345")).thenReturn(Optional.empty());
//
//    // Act and Assert
//    assertThrows(AppException.class, () -> promptpayService.createPromptpay(promptpayDto));
//
//    // Use the correct type for the userId in the verify method
//    verify(userRepository, times(1)).findById("12345");
//}
//    @Test
//    public void test_null_name() {
//        // Arrange
//        UserRepository userRepository = Mockito.mock(UserRepository.class);
//        PromptpayMapper promptpayMapper = Mockito.mock(PromptpayMapper.class);
//        PromptpayRepository promptpayRepository = Mockito.mock(PromptpayRepository.class);
//        PromptpayService promptpayService = new PromptpayService(promptpayRepository, promptpayMapper, userRepository);
//        PromptpayDto promptpayDto = new PromptpayDto();
//        promptpayDto.setName(null);
//        promptpayDto.setUserId("12345");
//        promptpayDto.setPhoneNumber("1234567890");
//
//        // Act and Assert
//        assertThrows(ConstraintViolationException.class, () -> promptpayService.createPromptpay(promptpayDto));
//    }
//    @Test
//    public void test_null_userId1() {
//        // Arrange
//        UserRepository userRepository = Mockito.mock(UserRepository.class);
//        PromptpayMapper promptpayMapper = Mockito.mock(PromptpayMapper.class);
//        PromptpayRepository promptpayRepository = Mockito.mock(PromptpayRepository.class);
//        PromptpayService promptpayService = new PromptpayService(promptpayRepository, promptpayMapper, userRepository);
//        PromptpayDto promptpayDto = new PromptpayDto();
//        promptpayDto.setName("John Doe");
//        promptpayDto.setUserId(null);
//        promptpayDto.setPhoneNumber("1234567890");
//
//        // Act and Assert
//        assertThrows(NullPointerException.class, () -> promptpayService.createPromptpay(promptpayDto));
//    }
//    @Test
//    public void test_null_userId() {
//        // Arrange
//        UserRepository userRepository = Mockito.mock(UserRepository.class);
//        PromptpayMapper promptpayMapper = Mockito.mock(PromptpayMapper.class);
//        PromptpayRepository promptpayRepository = Mockito.mock(PromptpayRepository.class);
//
//        // Adjust the PromptpayService constructor to throw AppException with "Unknown user" message
//        boolean someFlag = true; // Set the value of your boolean flag
//        PromptpayService promptpayService = new PromptpayService(promptpayRepository, promptpayMapper, userRepository, someFlag);
//
//        PromptpayDto promptpayDto = new PromptpayDto();
//        promptpayDto.setName("John Doe");
//        promptpayDto.setUserId(null);
//        promptpayDto.setPhoneNumber("1234567890");
//
//        // Act and Assert
//        AppException exception = assertThrows(AppException.class, () -> promptpayService.createPromptpay(promptpayDto));
//        assertEquals("Unknown user", exception.getMessage());
//    }
}
