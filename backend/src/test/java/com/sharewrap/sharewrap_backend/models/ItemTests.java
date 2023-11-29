package com.sharewrap.sharewrap_backend.models;

import org.junit.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class ItemTests {
    @Test
    public void test_set_and_get_item_price() {
        Item item = new Item();
        item.setPrice(20.0);
        assertEquals(20.0, item.getPrice(), 0.001);
    }
    @Test(expected = NullPointerException.class)
    public void test_item_name_cannot_be_null() {
        Item item = new Item();
        item.setName(null);
    }
    @Test
    public void test_set_and_get_item_name() {
        Item item = new Item();
        item.setName("New Item");
        assertEquals("New Item", item.getName());
    }
    @Test
    public void test_create_item_with_name_and_price() {
        Item item = new Item("My Item", 10.0);
        assertEquals("My Item", item.getName());
        assertEquals(10.0, item.getPrice(), 0.001);
    }
}
