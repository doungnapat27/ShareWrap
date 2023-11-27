package com.sharewrap.sharewrap_backend.services;

import com.sharewrap.sharewrap_backend.dtos.BankAccountDto;
import com.sharewrap.sharewrap_backend.dtos.PromptpayDto;
import com.sharewrap.sharewrap_backend.dtos.UserBillDto;
import com.sharewrap.sharewrap_backend.mappers.BankAccountMapper;
import com.sharewrap.sharewrap_backend.mappers.PromptpayMapper;
import com.sharewrap.sharewrap_backend.mappers.UserBillMapper;
import com.sharewrap.sharewrap_backend.models.*;
import com.sharewrap.sharewrap_backend.repositories.BankAccountRepository;
import com.sharewrap.sharewrap_backend.repositories.PromptpayRepository;
import com.sharewrap.sharewrap_backend.repositories.UserBillRepository;
import com.sharewrap.sharewrap_backend.repositories.UserRepository;
import org.junit.jupiter.api.Test;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class UserBillServiceTest {
    //Test case 4 - functionality based
    @Test
    public void test_addDetails() {
        // Arrange
        UserRepository userRepository = mock(UserRepository.class);
        UserBillMapper userBillMapper = mock(UserBillMapper.class);
        PromptpayRepository promptpayRepository = mock(PromptpayRepository.class);
        PromptpayMapper promptpayMapper = mock(PromptpayMapper.class);
        BankAccountRepository bankAccountRepository = mock(BankAccountRepository.class);
        BankAccountMapper bankAccountMapper = mock(BankAccountMapper.class);
        UserBillRepository userBillRepository = mock(UserBillRepository.class);

        UserBillService userBillService = new UserBillService(userRepository, userBillMapper, promptpayRepository, promptpayMapper, bankAccountRepository, bankAccountMapper, userBillRepository);

        Bill bill = new Bill();
        UserBillDto userBillDto = new UserBillDto();
        UserBill userBill = new UserBill();
        User billOwner = new User();
        Promptpay promptpay = new Promptpay();
        PromptpayDto promptpayDto = new PromptpayDto();
        BankAccount bankAccount = new BankAccount();
        BankAccountDto bankAccountDto = new BankAccountDto();

        bill.setUser(billOwner);
        bill.setPaymentType('P');
        userBill.setReceipt(new byte[0]);

        when(promptpayRepository.findByUser(billOwner)).thenReturn(Optional.of(promptpay));
        when(promptpayMapper.toPromptpayDto(promptpay)).thenReturn(promptpayDto);

        // Act
        UserBillDto result = userBillService.addDetails(bill, userBillDto, userBill);

        // Assert
        assertEquals(promptpayDto, result.getPromptpayDto());
    }

}
