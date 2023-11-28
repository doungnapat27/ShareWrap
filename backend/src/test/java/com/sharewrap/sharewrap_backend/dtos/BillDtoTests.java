package com.sharewrap.sharewrap_backend.dtos;

import org.junit.Test;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static org.hibernate.validator.internal.util.Contracts.assertNotNull;
import static org.junit.jupiter.api.Assertions.*;

public class BillDtoTests {
    @Test
    public void test_initialized_with_all_fields() {
        Date date = new Date();
        List<UserBillDto> userBills = new ArrayList<>();
        userBills.add(new UserBillDto());

        BillDto billDto = new BillDto();
        billDto.setId(1L);
        billDto.setName("Test Bill");
        billDto.setPaid(true);
        billDto.setUserId("12345");
        billDto.setUserBills(userBills);
        billDto.setPaymentType('C');
        billDto.setCreatedDate(date);
        billDto.setTotal(100.0);
        billDto.setReceipt("ABC123");
        billDto.setUploadedDate(date);

        assertEquals(1L, billDto.getId().longValue());
        assertEquals("Test Bill", billDto.getName());
        assertTrue(billDto.isPaid());
        assertEquals("12345", billDto.getUserId());
        assertEquals(userBills, billDto.getUserBills());
        assertEquals('C', billDto.getPaymentType());
        assertEquals(date, billDto.getCreatedDate());
        assertEquals(100.0, billDto.getTotal(), 0.0);
        assertEquals("ABC123", billDto.getReceipt());
        assertEquals(date, billDto.getUploadedDate());
    }
    @Test(expected = NullPointerException.class)
    public void test_null_name_exception() {
        BillDto billDto = new BillDto();
        billDto.setName(null);
    }
}
