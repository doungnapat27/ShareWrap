package com.sharewrap.sharewrap_backend.services;

import com.sharewrap.sharewrap_backend.dtos.BankAccountDto;
import com.sharewrap.sharewrap_backend.exceptions.AppException;
import com.sharewrap.sharewrap_backend.mappers.BankAccountMapper;
import com.sharewrap.sharewrap_backend.models.BankAccount;
import com.sharewrap.sharewrap_backend.models.User;
import com.sharewrap.sharewrap_backend.repositories.BankAccountRepository;
import com.sharewrap.sharewrap_backend.repositories.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class BankAccountService {

    final private BankAccountRepository bankAccountRepository;
    final private BankAccountMapper bankAccountMapper;
    final private UserRepository userRepository;


    @Transactional
    public BankAccountDto createBankAccount(BankAccountDto bankAccountDto) {
        BankAccount bankAccount = bankAccountMapper.toBankAccount(bankAccountDto);
        User user = userRepository.findById(bankAccountDto.getUserId())
                .orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));
        bankAccount.setUser(user);
        user.getPayments().add(bankAccount);
        BankAccount savedBankAccount = bankAccountRepository.save(bankAccount);
        return bankAccountMapper.toBankAccountDto(savedBankAccount);
    }
}
