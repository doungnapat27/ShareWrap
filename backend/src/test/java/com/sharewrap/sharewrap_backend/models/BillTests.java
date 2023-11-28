package com.sharewrap.sharewrap_backend.models;

import org.junit.Test;

import static org.hibernate.validator.internal.util.Contracts.assertNotNull;
import static org.junit.jupiter.api.Assertions.*;

public class BillTests {
    @Test
    public void test_specified_payment_type() {
        // Arrange
        char paymentType = 'P';
        Bill bill = new Bill();
        bill.setPaymentType(paymentType);

        // Assert
        assertEquals(paymentType, bill.getPaymentType());
    }
    @Test
    public void test_null_name() {
        // Arrange
        Bill bill = new Bill();
        bill.setName(null);

        // Assert
        assertNull(bill.getName());
    }
    @Test
    public void test_null_payment_type() {
        // Arrange
        Bill bill = new Bill();
        bill.setPaymentType('\0');

        // Assert
        assertEquals('\0', bill.getPaymentType());
    }
    @Test
    public void test_null_user() {
        // Arrange
        Bill bill = new Bill();
        bill.setUser(null);

        // Assert
        assertNull(bill.getUser());
    }
}
