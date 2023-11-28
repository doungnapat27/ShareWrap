package com.sharewrap.sharewrap_backend.models;

import org.junit.jupiter.api.Test;

import static org.hibernate.validator.internal.util.Contracts.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class BankAccountTests {
    @Test
    public void test_createBankAccountWithParameters() {
        // Arrange
        String bankName = "Bank A";
        String accountNumber = "1234567890";
        String name = "Bank Account";

        // Act
        BankAccount bankAccount = new BankAccount(bankName, accountNumber, name);

        // Assert
        assertNotNull(bankAccount);
        assertEquals(bankName, bankAccount.getBankName());
        assertEquals(accountNumber, bankAccount.getAccountNumber());
        assertEquals(name, bankAccount.getName());
    }
    @Test
    public void test_getAndSetBankNameAccountNumberAndName() {
        // Arrange
        BankAccount bankAccount = new BankAccount();
        String bankName = "Bank A";
        String accountNumber = "1234567890";
        String name = "Bank Account";

        // Act
        bankAccount.setBankName(bankName);
        bankAccount.setAccountNumber(accountNumber);
        bankAccount.setName(name);

        // Assert
        assertEquals(bankName, bankAccount.getBankName());
        assertEquals(accountNumber, bankAccount.getAccountNumber());
        assertEquals(name, bankAccount.getName());
    }
    @Test
    public void test_getAndSetUser() {
        // Arrange
        BankAccount bankAccount = new BankAccount();
        User user = new User();

        // Act
        bankAccount.setUser(user);

        // Assert
        assertEquals(user, bankAccount.getUser());
    }
}
