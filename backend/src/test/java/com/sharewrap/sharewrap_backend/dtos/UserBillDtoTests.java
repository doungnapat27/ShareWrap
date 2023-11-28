package com.sharewrap.sharewrap_backend.dtos;

import org.junit.Test;

import java.util.ArrayList;
import java.util.Date;

import static org.hibernate.validator.internal.util.Contracts.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class UserBillDtoTests {
    @Test
    public void test_update_attributes() {
        UserBillDto userBillDto = new UserBillDto();

        userBillDto.setId(1L);
        userBillDto.setUserId("user1");
        userBillDto.setBillId(2L);
        userBillDto.setShareTotal(100.0);
        userBillDto.setPaid(true);
        userBillDto.setApprove(true);
        userBillDto.setItems(new ArrayList<>());
        userBillDto.setPaymentType('P');
        userBillDto.setBillName("bill1");
        userBillDto.setBillOwnerName("owner1");
        userBillDto.setBillCreatedDate(new Date());
        userBillDto.setPromptpayDto(new PromptpayDto());
        userBillDto.setBankAccountDto(new BankAccountDto());
        userBillDto.setReceipt("receipt1");
        userBillDto.setUploadedDate(new Date());

        assertEquals(1L, userBillDto.getId().longValue());
        assertEquals("user1", userBillDto.getUserId());
        assertEquals(2L, userBillDto.getBillId().longValue());
        assertEquals(100.0, userBillDto.getShareTotal(), 0.0);
        assertTrue(userBillDto.isPaid());
        assertTrue(userBillDto.isApprove());
        assertNotNull(userBillDto.getItems());
        assertEquals('P', userBillDto.getPaymentType());
        assertEquals("bill1", userBillDto.getBillName());
        assertEquals("owner1", userBillDto.getBillOwnerName());
        assertNotNull(userBillDto.getBillCreatedDate());
        assertNotNull(userBillDto.getPromptpayDto());
        assertNotNull(userBillDto.getBankAccountDto());
        assertEquals("receipt1", userBillDto.getReceipt());
        assertNotNull(userBillDto.getUploadedDate());
    }

}
