package com.sharewrap.sharewrap_backend.models;

import org.junit.Test;

import static org.hibernate.validator.internal.util.Contracts.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;

public class PromptpayTests {
    @Test
    public void test_getter_and_setter_methods_for_phoneNumber_work_as_expected() {
        // Arrange
        Promptpay promptpay = new Promptpay();
        String phoneNumber = "1234567890";

        // Act
        promptpay.setPhoneNumber(phoneNumber);
        String result = promptpay.getPhoneNumber();

        // Assert
        assertEquals(phoneNumber, result);
    }
    @Test
    public void test_constructor_can_take_a_non_null_phoneNumber_argument() {
        // Arrange
        String phoneNumber = "1234567890";

        // Act
        Promptpay promptpay = new Promptpay("John Doe", phoneNumber);
        String result = promptpay.getPhoneNumber();

        // Assert
        assertEquals(phoneNumber, result);
    }
    @Test
    public void test_create_promptpay_with_name_and_phoneNumber() {
        // Arrange
        String name = "John Doe";
        String phoneNumber = "1234567890";

        // Act
        Promptpay promptpay = new Promptpay(name, phoneNumber);

        // Assert
        assertEquals(name, promptpay.getName());
        assertEquals(phoneNumber, promptpay.getPhoneNumber());
    }
    @Test
    public void test_set_valid_phone_number() {
        // Arrange
        Promptpay promptpay = new Promptpay();
        String phoneNumber = "0899999999";

        // Act
        promptpay.setPhoneNumber(phoneNumber);
        String result = promptpay.getPhoneNumber();

        // Assert
        assertEquals(phoneNumber, result);
    }
    @Test
    public void test_return_null_if_promptpay_and_payment_have_null_names() {
        // Arrange
        String name = null;
        String phoneNumber = "1234567890";
        Promptpay promptpay = new Promptpay(name, phoneNumber);
        Payment payment = new Payment(null);
        promptpay.setUser(payment.getUser());

        // Act
        String result = promptpay.getName();

        // Assert
        assertNull(result);
    }
    @Test
    public void test_setValidName() {
        Promptpay promptpay = new Promptpay();
        promptpay.setName("John Doe");
        assertEquals("John Doe", promptpay.getName());
    }
    @Test(expected = NumberFormatException.class)
    public void test_setId_nonNumericId() {
        Promptpay promptpay = new Promptpay();
        String nonNumericId = "abc";
        promptpay.setId(Long.parseLong(nonNumericId));
    }
    @Test
    public void test_setId_nullId() {
        Promptpay promptpay = new Promptpay();
        Long initialId = promptpay.getId();
        promptpay.setId(null);
        assertEquals(initialId, promptpay.getId());
    }
    @Test
    public void test_setId_validId() {
        Promptpay promptpay = new Promptpay();
        Long id = 1L;
        promptpay.setId(id);
        assertEquals(id, promptpay.getId());
    }
    @Test
    public void test_setUser_validUserObject() {
        // Arrange
        User user = new User("test@example.com", "testUser");
        Promptpay promptpay = new Promptpay();

        // Act
        promptpay.setUser(user);

        // Assert
        assertEquals(user, promptpay.getUser());
    }
    @Test
    public void test_setUser_nullUserObject() {
        // Arrange
        Promptpay promptpay = new Promptpay();

        // Act
        promptpay.setUser(null);

        // Assert
        assertNull(promptpay.getUser());
    }

}
