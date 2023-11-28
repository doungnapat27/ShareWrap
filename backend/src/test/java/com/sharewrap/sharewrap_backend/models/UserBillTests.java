package com.sharewrap.sharewrap_backend.models;

import org.junit.Test;

import java.time.LocalDate;
import java.util.Date;
import java.time.LocalDate;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;

public class UserBillTests {
    @Test
    public void test_getter_for_bill_returns_expected_value() {
        UserBill userBill = new UserBill();
        Bill bill = new Bill();
        userBill.setBill(bill);
        assertEquals(bill, userBill.getBill());
    }
    @Test
    public void test_setter_for_bill_sets_expected_value() {
        UserBill userBill = new UserBill();
        Bill bill = new Bill();
        userBill.setBill(bill);
        assertEquals(bill, userBill.getBill());
    }
    @Test
    public void test_createUserBillWithValidParameters() {
        User user = new User("test@example.com", "testUser");
        Bill bill = new Bill("Test Bill");
        Double shareTotal = 10.0;

        UserBill userBill = new UserBill(user, bill, shareTotal);

        assertEquals(user, userBill.getUser());
        assertEquals(bill, userBill.getBill());
        assertEquals(shareTotal, userBill.getShareTotal());
        assertFalse(userBill.getIsPaid());
        assertFalse(userBill.getIsApprove());
    }
    @Test
    public void test_setBillWithValidBillObject_setsBillFieldCorrectly() {
        User user = new User("test@example.com", "testUser");
        Bill bill1 = new Bill("Test Bill 1");
        Bill bill2 = new Bill("Test Bill 2");
        Double shareTotal = 10.0;

        UserBill userBill = new UserBill(user, bill1, shareTotal);
        userBill.setBill(bill2);

        assertEquals(bill2, userBill.getBill());
    }
    @Test(expected = Exception.class)
    public void test_setUploadedDate_after2038() {
        // Arrange
        UserBill userBill = new UserBill();
        Date uploadedDate = new Date(2040, 1, 1);

        // Act
        userBill.setUploadedDate((java.sql.Date) uploadedDate);
    }
}
