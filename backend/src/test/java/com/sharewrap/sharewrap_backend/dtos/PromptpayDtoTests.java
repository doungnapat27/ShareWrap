package com.sharewrap.sharewrap_backend.dtos;

import org.junit.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;

public class PromptpayDtoTests {
    @Test
    public void test_default_values() {
        PromptpayDto promptpayDto = new PromptpayDto();

        assertNull(promptpayDto.getId());
        assertNull(promptpayDto.getName());
        assertNull(promptpayDto.getUserId());
        assertNull(promptpayDto.getPhoneNumber());
    }
    @Test
    public void test_all_fields_set() {
        Long id = 1L;
        String name = "John";
        String userId = "user1";
        String phoneNumber = "1234567890";

        PromptpayDto promptpayDto = PromptpayDto.builder()
                .id(id)
                .name(name)
                .userId(userId)
                .phoneNumber(phoneNumber)
                .build();

        assertEquals(id, promptpayDto.getId());
        assertEquals(name, promptpayDto.getName());
        assertEquals(userId, promptpayDto.getUserId());
        assertEquals(phoneNumber, promptpayDto.getPhoneNumber());
    }
    @Test
    public void test_null_values() {
        PromptpayDto promptpayDto = new PromptpayDto();

        assertNull(promptpayDto.getId());
        assertNull(promptpayDto.getName());
        assertNull(promptpayDto.getUserId());
        assertNull(promptpayDto.getPhoneNumber());
    }
    @Test
    public void test_set_get_id_null() {
        PromptpayDto promptpayDto = new PromptpayDto();
        promptpayDto.setId(null);

        assertNull(promptpayDto.getId());
    }
}
