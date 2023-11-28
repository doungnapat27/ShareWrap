package com.sharewrap.sharewrap_backend.dtos;

import org.junit.Test;

import static org.hibernate.validator.internal.util.Contracts.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class ItemDtoTests {
    @Test
    public void test_create_instance_with_valid_parameters() {
        ItemDto itemDto = new ItemDto(1L, "Test Item", 10.0);
        assertNotNull(itemDto);
        assertEquals(1L, itemDto.getId().longValue());
        assertEquals("Test Item", itemDto.getName());
        assertEquals(10.0, itemDto.getPrice(), 0.0);
    }
    @Test
    public void test_get_id() {
        ItemDto itemDto = new ItemDto(1L, "Test Item", 10.0);
        assertEquals(1L, itemDto.getId().longValue());
    }
    @Test
    public void test_get_name() {
        ItemDto itemDto = new ItemDto(1L, "Test Item", 10.0);
        assertEquals("Test Item", itemDto.getName());
    }
    @Test(expected = IllegalArgumentException.class)
    public void test_create_instance_with_negative_price() {
        ItemDto itemDto = new ItemDto(1L, "Test Item", -10.0);
    }
}
