package com.sharewrap.sharewrap_backend.dtos;

import org.junit.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;

public class BankAccountDtoTests {
    @Test
    public void test_get_null_values_for_all_fields_if_not_set() {
        BankAccountDto bankAccountDto = new BankAccountDto();

        assertNull(bankAccountDto.getId());
        assertNull(bankAccountDto.getName());
        assertNull(bankAccountDto.getUserId());
        assertNull(bankAccountDto.getBankName());
        assertNull(bankAccountDto.getAccountNumber());
    }
    @Test
    public void test_create_bank_account_with_all_fields() {
        BankAccountDto bankAccountDto = new BankAccountDto();
        bankAccountDto.setId(1L);
        bankAccountDto.setName("John Doe");
        bankAccountDto.setUserId("user1");
        bankAccountDto.setBankName("Bank of America");
        bankAccountDto.setAccountNumber("1234567890");

        assertEquals(1L, bankAccountDto.getId().longValue());
        assertEquals("John Doe", bankAccountDto.getName());
        assertEquals("user1", bankAccountDto.getUserId());
        assertEquals("Bank of America", bankAccountDto.getBankName());
        assertEquals("1234567890", bankAccountDto.getAccountNumber());
    }
    @Test
    public void test_create_bank_account_with_no_fields() {
        BankAccountDto bankAccountDto = new BankAccountDto();

        assertNull(bankAccountDto.getId());
        assertNull(bankAccountDto.getName());
        assertNull(bankAccountDto.getUserId());
        assertNull(bankAccountDto.getBankName());
        assertNull(bankAccountDto.getAccountNumber());
    }
}
