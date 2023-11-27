package com.sharewrap.sharewrap_backend.dtos;

import org.junit.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class PaymentDtoTests {
    @Test
    public void test_createPaymentDtoWithValidFields() {
        PaymentDto paymentDto = new PaymentDto("John Doe", "12345");
        assertEquals("John Doe", paymentDto.getName());
        assertEquals("12345", paymentDto.getUserId());
    }
    @Test
    public void test_updateNameAndUserIdFields() {
        PaymentDto paymentDto = new PaymentDto("John Doe", "12345");
        paymentDto.setName("Jane Smith");
        paymentDto.setUserId("54321");
        assertEquals("Jane Smith", paymentDto.getName());
        assertEquals("54321", paymentDto.getUserId());
    }
    @Test(expected = NullPointerException.class)
    public void test_createPaymentDtoWithNullFields() {
        PaymentDto paymentDto = new PaymentDto(null, "12345");
    }
}
