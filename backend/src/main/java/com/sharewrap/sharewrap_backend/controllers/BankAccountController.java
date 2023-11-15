package com.sharewrap.sharewrap_backend.controllers;

import com.sharewrap.sharewrap_backend.dtos.BankAccountDto;
import com.sharewrap.sharewrap_backend.services.BankAccountService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/{userId}/bank-account")
    public ResponseEntity<BankAccountDto> getBankAccount(@PathVariable String userId) {
        System.out.println("Getting bank account...");
        BankAccountDto createdBankAccount = bankAccountService.getBankAccount(userId);
        return ResponseEntity.ok(createdBankAccount);
    }

    @PutMapping("/update/bank-account")
    public ResponseEntity<BankAccountDto> updateBankAccount(@RequestBody @Valid BankAccountDto bankAccountDto) {
        System.out.println("Updating bank account...");
        BankAccountDto updatedBankAccount = bankAccountService.updateBankAccount(bankAccountDto);
        return ResponseEntity.ok(updatedBankAccount);
    }
}
