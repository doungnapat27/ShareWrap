package com.sharewrap.sharewrap_backend.models;

import org.junit.Test;

import static org.hibernate.validator.internal.util.Contracts.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class PaymentTests {
    @Test
    public void test_payment_object_id_retrieved() {
        // Arrange
        String name = "Test Payment";
        Payment payment = new Payment(name);
        Long expectedId = 1L;
        payment.setId(expectedId);

        // Act
        Long actualId = payment.getId();

        // Assert
        assertEquals(expectedId, actualId);
    }
    @Test
    public void test_paymentObjectWithName() {
        Payment payment = new Payment("Test Payment");
        assertNotNull(payment);
        assertEquals("Test Payment", payment.getName());
    }
    @Test
    public void test_paymentObjectWithoutParameters() {
        Payment payment = new Payment();
        assertNotNull(payment);
    }
    @Test
    public void test_paymentObjectWithUser() {
        User user = new User();
        Payment payment = new Payment();
        payment.setUser(user);
        assertNotNull(payment.getUser());
        assertEquals(user, payment.getUser());
    }
    @Test
    public void test_set_valid_name() {
        Payment payment = new Payment();
        payment.setName("John Doe");
        assertEquals("John Doe", payment.getName());
    }
    @Test
    public void test_setUserWithUserObject() {
        User user = new User();
        Payment payment = new Payment();
        payment.setUser(user);
        assertNotNull(payment.getUser());
        assertEquals(user, payment.getUser());
    }
}
