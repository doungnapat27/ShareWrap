package com.sharewrap.sharewrap_backend.controllers;

import com.sharewrap.sharewrap_backend.dtos.BankAccountDto;
import com.sharewrap.sharewrap_backend.services.BankAccountService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;

@RequiredArgsConstructor
@RestController
public class BankAccountController {

    final private BankAccountService bankAccountService;

    @PostMapping("/add/bank-account")
    public ResponseEntity<BankAccountDto> addBankAccount(@RequestBody @Valid BankAccountDto bankAccountDto) {
        BankAccountDto createdBankAccount = bankAccountService.createBankAccount(bankAccountDto);
        return ResponseEntity.created(URI.create("/bank-account/" + bankAccountDto.getId())).body(createdBankAccount);
    }
}
