package com.sharewrap.sharewrap_backend.services;

import com.sharewrap.sharewrap_backend.dtos.BankAccountDto;
import com.sharewrap.sharewrap_backend.exceptions.AppException;
import com.sharewrap.sharewrap_backend.mappers.BankAccountMapper;
import com.sharewrap.sharewrap_backend.models.BankAccount;
import com.sharewrap.sharewrap_backend.models.User;
import com.sharewrap.sharewrap_backend.repositories.BankAccountRepository;
import com.sharewrap.sharewrap_backend.repositories.UserRepository;
import org.junit.Test;

import java.util.Optional;

import static org.hibernate.validator.internal.util.Contracts.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class BankAccountServiceTests {
//    @Test
//    public void test_createBankAccount_validUserValidDetails() {
//        // Arrange
//        BankAccountDto bankAccountDto = new BankAccountDto();
//        bankAccountDto.setUserId("validUserId");
//        bankAccountDto.setName("validName");
//        bankAccountDto.setBankName("validBankName");
//        bankAccountDto.setAccountNumber("validAccountNumber");
//
//        BankAccountMapper bankAccountMapper = mock(BankAccountMapper.class);
//        BankAccountRepository bankAccountRepository = mock(BankAccountRepository.class);
//        UserRepository userRepository = mock(UserRepository.class);
//
//        BankAccountService bankAccountService = new BankAccountService(bankAccountRepository, bankAccountMapper, userRepository);
//
//        User user = new User();
//        when(userRepository.findById("validUserId")).thenReturn(Optional.of(user));
//
//        BankAccount savedBankAccount = new BankAccount();
//        when(bankAccountRepository.save(any())).thenAnswer(invocation -> {
//            BankAccount argument = invocation.getArgument(0);
//            argument.setId(1L); // Assuming setId method is available
//            return argument;
//        });
//
//        when(bankAccountMapper.toBankAccount(any())).thenReturn(savedBankAccount); // Mock the mapper to return a non-null BankAccount
//
//        // Act
//        BankAccountDto result = bankAccountService.createBankAccount(bankAccountDto);
//
//        // Assert
//        assertNotNull(result);
//        assertEquals(savedBankAccount, bankAccountMapper.toBankAccount(result));
//        assertEquals(user, savedBankAccount.getUser());
//        assertTrue(user.getPayments().contains(savedBankAccount));
//    }

//    @Test
//    public void test_createBankAccount_returnsCreatedDto() {
//        // Arrange
//        BankAccountDto bankAccountDto = new BankAccountDto();
//        bankAccountDto.setUserId("validUserId");
//        bankAccountDto.setName("validName");
//        bankAccountDto.setBankName("validBankName");
//        bankAccountDto.setAccountNumber("validAccountNumber");
//
//        BankAccountMapper bankAccountMapper = mock(BankAccountMapper.class);
//        BankAccountRepository bankAccountRepository = mock(BankAccountRepository.class);
//        UserRepository userRepository = mock(UserRepository.class);
//
//        BankAccountService bankAccountService = new BankAccountService(bankAccountRepository, bankAccountMapper, userRepository);
//
//        User user = new User();
//        when(userRepository.findById("validUserId")).thenReturn(Optional.of(user));
//
//        BankAccount savedBankAccount = new BankAccount();
//        when(bankAccountRepository.save(any(BankAccount.class))).thenReturn(savedBankAccount);
//
//        // Act
//        BankAccountDto result = bankAccountService.createBankAccount(bankAccountDto);
//
//        // Assert
//        assertNotNull(result);
//        assertEquals(savedBankAccount, bankAccountMapper.toBankAccount(result));
//    }
    @Test(expected = AppException.class)
    public void test_createBankAccount_unknownUserIdThrowsAppException() {
        // Arrange
        BankAccountDto bankAccountDto = new BankAccountDto();
        bankAccountDto.setUserId("unknownUserId");
        bankAccountDto.setName("validName");
        bankAccountDto.setBankName("validBankName");
        bankAccountDto.setAccountNumber("validAccountNumber");

        BankAccountMapper bankAccountMapper = mock(BankAccountMapper.class);
        BankAccountRepository bankAccountRepository = mock(BankAccountRepository.class);
        UserRepository userRepository = mock(UserRepository.class);

        BankAccountService bankAccountService = new BankAccountService(bankAccountRepository, bankAccountMapper, userRepository);

        when(userRepository.findById("unknownUserId")).thenReturn(Optional.empty());

        // Act
        bankAccountService.createBankAccount(bankAccountDto);
    }
    @Test(expected = AppException.class)
    public void test_null_user_id() {
        // Arrange
        String userId = null;
        BankAccountMapper bankAccountMapper = mock(BankAccountMapper.class);
        BankAccountRepository bankAccountRepository = mock(BankAccountRepository.class);
        UserRepository userRepository = mock(UserRepository.class);

        BankAccountService bankAccountService = new BankAccountService(bankAccountRepository, bankAccountMapper, userRepository);

        // Act
        bankAccountService.getBankAccount(userId);
    }
}
